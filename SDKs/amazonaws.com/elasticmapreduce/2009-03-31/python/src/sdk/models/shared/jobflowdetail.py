from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import bootstrapactiondetail
from . import jobflowexecutionstatusdetail
from . import jobflowinstancesdetail
from . import scaledownbehavior_enum
from . import stepdetail


@dataclass_json
@dataclass
class JobFlowDetail:
    ami_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AmiVersion' }})
    auto_scaling_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingRole' }})
    bootstrap_actions: Optional[List[bootstrapactiondetail.BootstrapActionDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BootstrapActions' }})
    execution_status_detail: jobflowexecutionstatusdetail.JobFlowExecutionStatusDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionStatusDetail' }})
    instances: jobflowinstancesdetail.JobFlowInstancesDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Instances' }})
    job_flow_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobFlowId' }})
    job_flow_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobFlowRole' }})
    log_encryption_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogEncryptionKmsKeyId' }})
    log_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogUri' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scale_down_behavior: Optional[scaledownbehavior_enum.ScaleDownBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScaleDownBehavior' }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRole' }})
    steps: Optional[List[stepdetail.StepDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Steps' }})
    supported_products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedProducts' }})
    visible_to_all_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VisibleToAllUsers' }})
    
