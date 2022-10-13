from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import eventcategory_enum
from . import lookupattribute


@dataclass_json
@dataclass
class LookupEventsRequest:
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_category: Optional[eventcategory_enum.EventCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventCategory' }})
    lookup_attributes: Optional[List[lookupattribute.LookupAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookupAttributes' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
