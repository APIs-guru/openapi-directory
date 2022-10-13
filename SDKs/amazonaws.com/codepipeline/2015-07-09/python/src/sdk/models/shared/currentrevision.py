from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CurrentRevision:
    change_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeIdentifier' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    revision: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    revision_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionSummary' }})
    
