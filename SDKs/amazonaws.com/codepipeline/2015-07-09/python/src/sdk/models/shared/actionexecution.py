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
class ActionExecution:
    r"""ActionExecution
    Represents information about the run of an action.
    """
    
    action_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionExecutionId') }})
    error_details: Optional[ErrorDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDetails') }})
    external_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalExecutionId') }})
    external_execution_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalExecutionUrl') }})
    last_status_change: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastStatusChange'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedBy') }})
    percent_complete: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentComplete') }})
    status: Optional[ActionExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
