from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateSuiteDefinitionResponse:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    suite_definition_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionArn' }})
    suite_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionId' }})
    suite_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionName' }})
    suite_definition_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionVersion' }})
    
