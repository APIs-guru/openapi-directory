from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import chronologicalorder_enum
from . import resourcetype_enum


@dataclass_json
@dataclass
class GetResourceConfigHistoryRequest:
    chronological_order: Optional[chronologicalorder_enum.ChronologicalOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chronologicalOrder' }})
    earlier_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'earlierTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    later_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'laterTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    resource_type: resourcetype_enum.ResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    
