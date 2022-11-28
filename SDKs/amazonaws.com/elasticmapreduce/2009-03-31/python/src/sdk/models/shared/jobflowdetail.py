from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobFlowDetail:
    r"""JobFlowDetail
    A description of a cluster (job flow).
    """
    
    execution_status_detail: JobFlowExecutionStatusDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionStatusDetail') }})
    instances: JobFlowInstancesDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Instances') }})
    job_flow_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobFlowId') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    ami_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AmiVersion') }})
    auto_scaling_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingRole') }})
    bootstrap_actions: Optional[List[BootstrapActionDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BootstrapActions') }})
    job_flow_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobFlowRole') }})
    log_encryption_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogEncryptionKmsKeyId') }})
    log_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogUri') }})
    scale_down_behavior: Optional[ScaleDownBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScaleDownBehavior') }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRole') }})
    steps: Optional[List[StepDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Steps') }})
    supported_products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedProducts') }})
    visible_to_all_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VisibleToAllUsers') }})
    
