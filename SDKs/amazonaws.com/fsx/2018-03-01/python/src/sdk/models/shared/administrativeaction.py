from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import administrativeactiontype_enum
from . import administrativeactionfailuredetails
from . import status_enum
from . import filesystem
from . import volume


@dataclass_json
@dataclass
class AdministrativeAction:
    administrative_action_type: Optional[administrativeactiontype_enum.AdministrativeActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdministrativeActionType' }})
    failure_details: Optional[administrativeactionfailuredetails.AdministrativeActionFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureDetails' }})
    progress_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgressPercent' }})
    request_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    target_file_system_values: Optional[filesystem.FileSystem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetFileSystemValues' }})
    target_volume_values: Optional[volume.Volume] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetVolumeValues' }})
    
