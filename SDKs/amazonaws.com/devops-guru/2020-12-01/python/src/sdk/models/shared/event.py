from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import eventdatasource_enum
from . import eventclass_enum
from . import resourcecollection
from . import eventresource


@dataclass_json
@dataclass
class Event:
    data_source: Optional[eventdatasource_enum.EventDataSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSource' }})
    event_class: Optional[eventclass_enum.EventClassEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventClass' }})
    event_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSource' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    resource_collection: Optional[resourcecollection.ResourceCollection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceCollection' }})
    resources: Optional[List[eventresource.EventResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
