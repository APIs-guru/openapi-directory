from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attributepayload


@dataclass_json
@dataclass
class ThingGroupProperties:
    attribute_payload: Optional[attributepayload.AttributePayload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributePayload' }})
    thing_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupDescription' }})
    
