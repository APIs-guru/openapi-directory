from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateBackendJobResponse:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppId') }})
    backend_environment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackendEnvironmentName') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operation') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateTime') }})
    
