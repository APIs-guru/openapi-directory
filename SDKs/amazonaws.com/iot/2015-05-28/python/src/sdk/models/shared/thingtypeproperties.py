from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ThingTypeProperties:
    r"""ThingTypeProperties
    The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
    """
    
    searchable_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchableAttributes') }})
    thing_type_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeDescription') }})
    
