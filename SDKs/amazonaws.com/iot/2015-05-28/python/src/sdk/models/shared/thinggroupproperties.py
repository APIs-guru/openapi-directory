from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ThingGroupProperties:
    r"""ThingGroupProperties
    Thing group properties.
    """
    
    attribute_payload: Optional[AttributePayload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributePayload') }})
    thing_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupDescription') }})
    
