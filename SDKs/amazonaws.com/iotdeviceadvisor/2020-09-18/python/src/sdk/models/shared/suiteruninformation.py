from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import suiterunstatus_enum


@dataclass_json
@dataclass
class SuiteRunInformation:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed' }})
    passed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passed' }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[suiterunstatus_enum.SuiteRunStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    suite_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionId' }})
    suite_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionName' }})
    suite_definition_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionVersion' }})
    suite_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteRunId' }})
    
