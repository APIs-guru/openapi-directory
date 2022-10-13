from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sourcetype_enum


@dataclass_json
@dataclass
class Event:
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventCategories' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    source_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceIdentifier' }})
    source_type: Optional[sourcetype_enum.SourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceType' }})
    
