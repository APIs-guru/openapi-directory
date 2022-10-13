from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from . import resourcegrouptag


@dataclass_json
@dataclass
class ResourceGroup:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: List[resourcegrouptag.ResourceGroupTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
