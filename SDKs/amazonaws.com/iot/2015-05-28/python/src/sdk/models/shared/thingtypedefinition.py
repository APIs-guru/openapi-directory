from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import thingtypemetadata
from . import thingtypeproperties


@dataclass_json
@dataclass
class ThingTypeDefinition:
    thing_type_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingTypeArn' }})
    thing_type_metadata: Optional[thingtypemetadata.ThingTypeMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingTypeMetadata' }})
    thing_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingTypeName' }})
    thing_type_properties: Optional[thingtypeproperties.ThingTypeProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingTypeProperties' }})
    
