from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FileSystemDescription:
    r"""FileSystemDescription
    A description of the file system.
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationToken') }})
    file_system_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    life_cycle_state: LifeCycleStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifeCycleState') }})
    number_of_mount_targets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfMountTargets') }})
    owner_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    performance_mode: PerformanceModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerformanceMode') }})
    size_in_bytes: FileSystemSize = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeInBytes') }})
    tags: List[Tag] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    availability_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZoneId') }})
    availability_zone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZoneName') }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encrypted') }})
    file_system_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemArn') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    provisioned_throughput_in_mibps: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughputInMibps') }})
    throughput_mode: Optional[ThroughputModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThroughputMode') }})
    
