from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateThingResponse:
    thing_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingArn' }})
    thing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingId' }})
    thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingName' }})
    
