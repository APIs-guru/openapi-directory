from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import status_enum


@dataclass_json
@dataclass
class TestCaseRun:
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failure' }})
    log_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logUrl' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    test_case_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCaseDefinitionId' }})
    test_case_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCaseDefinitionName' }})
    test_case_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCaseRunId' }})
    warnings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
