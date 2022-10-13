from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import suiterunstatus_enum
from . import suiterunconfiguration
from . import testresult


@dataclass_json
@dataclass
class GetSuiteRunResponse:
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorReason' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[suiterunstatus_enum.SuiteRunStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    suite_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionId' }})
    suite_definition_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionVersion' }})
    suite_run_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteRunArn' }})
    suite_run_configuration: Optional[suiterunconfiguration.SuiteRunConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteRunConfiguration' }})
    suite_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteRunId' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    test_result: Optional[testresult.TestResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testResult' }})
    
