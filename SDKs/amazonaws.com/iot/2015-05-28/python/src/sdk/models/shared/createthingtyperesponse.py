from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateThingTypeResponse:
    thing_type_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingTypeArn' }})
    thing_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingTypeId' }})
    thing_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingTypeName' }})
    
