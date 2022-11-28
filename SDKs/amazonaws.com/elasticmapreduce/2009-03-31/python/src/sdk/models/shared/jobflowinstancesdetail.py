from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobFlowInstancesDetail:
    r"""JobFlowInstancesDetail
    Specify the type of Amazon EC2 instances that the cluster (job flow) runs on.
    """
    
    instance_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceCount') }})
    master_instance_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterInstanceType') }})
    slave_instance_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SlaveInstanceType') }})
    ec2_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ec2KeyName') }})
    ec2_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ec2SubnetId') }})
    hadoop_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HadoopVersion') }})
    instance_groups: Optional[List[InstanceGroupDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceGroups') }})
    keep_job_flow_alive_when_no_steps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeepJobFlowAliveWhenNoSteps') }})
    master_instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterInstanceId') }})
    master_public_dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterPublicDnsName') }})
    normalized_instance_hours: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NormalizedInstanceHours') }})
    placement: Optional[PlacementType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Placement') }})
    termination_protected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminationProtected') }})
    
