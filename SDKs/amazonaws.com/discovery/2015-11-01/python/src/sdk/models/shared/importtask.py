from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import importstatus_enum


@dataclass_json
@dataclass
class ImportTask:
    application_import_failure: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationImportFailure' }})
    application_import_success: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationImportSuccess' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    errors_and_failed_entries_zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorsAndFailedEntriesZip' }})
    import_completion_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importCompletionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    import_deleted_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importDeletedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    import_request_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importRequestTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    import_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importTaskId' }})
    import_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importUrl' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    server_import_failure: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverImportFailure' }})
    server_import_success: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverImportSuccess' }})
    status: Optional[importstatus_enum.ImportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
