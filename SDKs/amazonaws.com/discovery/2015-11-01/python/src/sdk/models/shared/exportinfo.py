from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import exportstatus_enum


@dataclass_json
@dataclass
class ExportInfo:
    configurations_download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationsDownloadUrl' }})
    export_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportId' }})
    export_request_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportRequestTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    export_status: exportstatus_enum.ExportStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportStatus' }})
    is_truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isTruncated' }})
    requested_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    requested_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status_message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    
