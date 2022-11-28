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
class GetSuiteRunResponse:
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorReason') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[SuiteRunStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    suite_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteDefinitionId') }})
    suite_definition_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteDefinitionVersion') }})
    suite_run_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteRunArn') }})
    suite_run_configuration: Optional[SuiteRunConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteRunConfiguration') }})
    suite_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteRunId') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    test_result: Optional[TestResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testResult') }})
    
