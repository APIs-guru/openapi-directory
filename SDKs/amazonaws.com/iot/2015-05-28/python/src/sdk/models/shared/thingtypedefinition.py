from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ThingTypeDefinition:
    r"""ThingTypeDefinition
    The definition of the thing type, including thing type name and description.
    """
    
    thing_type_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeArn') }})
    thing_type_metadata: Optional[ThingTypeMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeMetadata') }})
    thing_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeName') }})
    thing_type_properties: Optional[ThingTypeProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeProperties') }})
    
