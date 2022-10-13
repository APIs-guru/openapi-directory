from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instancegroupdetail
from . import placementtype


@dataclass_json
@dataclass
class JobFlowInstancesDetail:
    ec2_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ec2KeyName' }})
    ec2_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ec2SubnetId' }})
    hadoop_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HadoopVersion' }})
    instance_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceCount' }})
    instance_groups: Optional[List[instancegroupdetail.InstanceGroupDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceGroups' }})
    keep_job_flow_alive_when_no_steps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeepJobFlowAliveWhenNoSteps' }})
    master_instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterInstanceId' }})
    master_instance_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterInstanceType' }})
    master_public_dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterPublicDnsName' }})
    normalized_instance_hours: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NormalizedInstanceHours' }})
    placement: Optional[placementtype.PlacementType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Placement' }})
    slave_instance_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SlaveInstanceType' }})
    termination_protected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminationProtected' }})
    
