from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicationpendingmodifiedvalues
from . import replicationsubnetgroup
from . import vpcsecuritygroupmembership


@dataclass_json
@dataclass
class ReplicationInstance:
    allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllocatedStorage' }})
    auto_minor_version_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMinorVersionUpgrade' }})
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZone' }})
    dns_name_servers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsNameServers' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    free_until: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FreeUntil', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    instance_create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceCreateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    multi_az: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MultiAZ' }})
    pending_modified_values: Optional[replicationpendingmodifiedvalues.ReplicationPendingModifiedValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PendingModifiedValues' }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredMaintenanceWindow' }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PubliclyAccessible' }})
    replication_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceArn' }})
    replication_instance_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceClass' }})
    replication_instance_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceIdentifier' }})
    replication_instance_private_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstancePrivateIpAddress' }})
    replication_instance_private_ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstancePrivateIpAddresses' }})
    replication_instance_public_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstancePublicIpAddress' }})
    replication_instance_public_ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstancePublicIpAddresses' }})
    replication_instance_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceStatus' }})
    replication_subnet_group: Optional[replicationsubnetgroup.ReplicationSubnetGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationSubnetGroup' }})
    secondary_availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryAvailabilityZone' }})
    vpc_security_groups: Optional[List[vpcsecuritygroupmembership.VpcSecurityGroupMembership]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcSecurityGroups' }})
    
