from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instancefleetconfig
from . import instancegroupconfig
from . import placementtype


@dataclass_json
@dataclass
class JobFlowInstancesConfig:
    additional_master_security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalMasterSecurityGroups' }})
    additional_slave_security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalSlaveSecurityGroups' }})
    ec2_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ec2KeyName' }})
    ec2_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ec2SubnetId' }})
    ec2_subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ec2SubnetIds' }})
    emr_managed_master_security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmrManagedMasterSecurityGroup' }})
    emr_managed_slave_security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmrManagedSlaveSecurityGroup' }})
    hadoop_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HadoopVersion' }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceCount' }})
    instance_fleets: Optional[List[instancefleetconfig.InstanceFleetConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceFleets' }})
    instance_groups: Optional[List[instancegroupconfig.InstanceGroupConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceGroups' }})
    keep_job_flow_alive_when_no_steps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeepJobFlowAliveWhenNoSteps' }})
    master_instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterInstanceType' }})
    placement: Optional[placementtype.PlacementType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Placement' }})
    service_access_security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceAccessSecurityGroup' }})
    slave_instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SlaveInstanceType' }})
    termination_protected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminationProtected' }})
    
