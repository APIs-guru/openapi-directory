from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from . import criterion


@dataclass_json
@dataclass
class ArchiveRuleSummary:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    filter: dict[str, criterion.Criterion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleName' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
