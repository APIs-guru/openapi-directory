from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActionRevision:
    created: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    revision_change_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionChangeId' }})
    revision_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    
