from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExportInfo:
    r"""ExportInfo
    Information regarding the export status of discovered data. The value is an array of objects.
    """
    
    export_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportId') }})
    export_request_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportRequestTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    export_status: ExportStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportStatus') }})
    status_message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    configurations_download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationsDownloadUrl') }})
    is_truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTruncated') }})
    requested_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    requested_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
