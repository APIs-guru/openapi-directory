from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import suitedefinitionconfiguration


@dataclass_json
@dataclass
class GetSuiteDefinitionResponse:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestVersion' }})
    suite_definition_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionArn' }})
    suite_definition_configuration: Optional[suitedefinitionconfiguration.SuiteDefinitionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionConfiguration' }})
    suite_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionId' }})
    suite_definition_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionVersion' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
