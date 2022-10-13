from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Ec2InstanceAttributes:
    additional_master_security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalMasterSecurityGroups' }})
    additional_slave_security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalSlaveSecurityGroups' }})
    ec2_availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ec2AvailabilityZone' }})
    ec2_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ec2KeyName' }})
    ec2_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ec2SubnetId' }})
    emr_managed_master_security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmrManagedMasterSecurityGroup' }})
    emr_managed_slave_security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmrManagedSlaveSecurityGroup' }})
    iam_instance_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamInstanceProfile' }})
    requested_ec2_availability_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedEc2AvailabilityZones' }})
    requested_ec2_subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedEc2SubnetIds' }})
    service_access_security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceAccessSecurityGroup' }})
    
