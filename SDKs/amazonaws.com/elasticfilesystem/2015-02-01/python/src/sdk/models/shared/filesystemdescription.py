from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import lifecyclestate_enum
from . import performancemode_enum
from . import filesystemsize
from . import tag
from . import throughputmode_enum


@dataclass_json
@dataclass
class FileSystemDescription:
    availability_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZoneId' }})
    availability_zone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZoneName' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationToken' }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encrypted' }})
    file_system_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemArn' }})
    file_system_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemId' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    life_cycle_state: lifecyclestate_enum.LifeCycleStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifeCycleState' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    number_of_mount_targets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfMountTargets' }})
    owner_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerId' }})
    performance_mode: performancemode_enum.PerformanceModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PerformanceMode' }})
    provisioned_throughput_in_mibps: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughputInMibps' }})
    size_in_bytes: filesystemsize.FileSystemSize = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeInBytes' }})
    tags: List[tag.Tag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    throughput_mode: Optional[throughputmode_enum.ThroughputModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThroughputMode' }})
    
