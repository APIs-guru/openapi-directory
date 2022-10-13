from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ControlComment:
    author_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorName' }})
    comment_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentBody' }})
    posted_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
