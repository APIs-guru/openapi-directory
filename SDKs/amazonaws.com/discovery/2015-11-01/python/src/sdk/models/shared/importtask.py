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
class ImportTask:
    r"""ImportTask
    An array of information related to the import task request that includes status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
    """
    
    application_import_failure: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationImportFailure') }})
    application_import_success: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationImportSuccess') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    errors_and_failed_entries_zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorsAndFailedEntriesZip') }})
    import_completion_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importCompletionTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    import_deleted_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importDeletedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    import_request_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importRequestTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    import_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importTaskId') }})
    import_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importUrl') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_import_failure: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverImportFailure') }})
    server_import_success: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverImportSuccess') }})
    status: Optional[ImportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
