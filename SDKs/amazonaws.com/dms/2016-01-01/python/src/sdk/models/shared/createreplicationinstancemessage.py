from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateReplicationInstanceMessage:
    allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllocatedStorage' }})
    auto_minor_version_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMinorVersionUpgrade' }})
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZone' }})
    dns_name_servers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsNameServers' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    multi_az: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MultiAZ' }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredMaintenanceWindow' }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PubliclyAccessible' }})
    replication_instance_class: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceClass' }})
    replication_instance_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceIdentifier' }})
    replication_subnet_group_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationSubnetGroupIdentifier' }})
    resource_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceIdentifier' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc_security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcSecurityGroupIds' }})
    
