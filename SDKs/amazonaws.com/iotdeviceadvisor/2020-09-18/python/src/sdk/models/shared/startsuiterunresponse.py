from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartSuiteRunResponse:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    suite_run_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteRunArn' }})
    suite_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteRunId' }})
    
