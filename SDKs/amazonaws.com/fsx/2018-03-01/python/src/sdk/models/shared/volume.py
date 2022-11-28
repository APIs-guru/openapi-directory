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
class Volume:
    r"""Volume
    Describes an Amazon FSx for NetApp ONTAP volume.
    """
    
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    file_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    lifecycle: Optional[VolumeLifecycleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lifecycle') }})
    lifecycle_transition_reason: Optional[LifecycleTransitionReason] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifecycleTransitionReason') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    ontap_configuration: Optional[OntapVolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OntapConfiguration') }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeId') }})
    volume_type: Optional[VolumeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeType') }})
    
