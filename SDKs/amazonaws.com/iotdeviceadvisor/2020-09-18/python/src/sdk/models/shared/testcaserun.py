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
class TestCaseRun:
    r"""TestCaseRun
    Provides test case run.
    """
    
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failure') }})
    log_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logUrl') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    test_case_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCaseDefinitionId') }})
    test_case_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCaseDefinitionName') }})
    test_case_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCaseRunId') }})
    warnings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
