from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobFlowInstancesConfig:
    r"""JobFlowInstancesConfig
    A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration.
    """
    
    additional_master_security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalMasterSecurityGroups') }})
    additional_slave_security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalSlaveSecurityGroups') }})
    ec2_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ec2KeyName') }})
    ec2_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ec2SubnetId') }})
    ec2_subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ec2SubnetIds') }})
    emr_managed_master_security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmrManagedMasterSecurityGroup') }})
    emr_managed_slave_security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmrManagedSlaveSecurityGroup') }})
    hadoop_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HadoopVersion') }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceCount') }})
    instance_fleets: Optional[List[InstanceFleetConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceFleets') }})
    instance_groups: Optional[List[InstanceGroupConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceGroups') }})
    keep_job_flow_alive_when_no_steps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeepJobFlowAliveWhenNoSteps') }})
    master_instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterInstanceType') }})
    placement: Optional[PlacementType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Placement') }})
    service_access_security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceAccessSecurityGroup') }})
    slave_instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SlaveInstanceType') }})
    termination_protected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminationProtected') }})
    
