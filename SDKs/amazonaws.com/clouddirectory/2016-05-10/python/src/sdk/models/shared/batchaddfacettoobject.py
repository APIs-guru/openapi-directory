from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchAddFacetToObject:
    r"""BatchAddFacetToObject
    Represents the output of a batch add facet to object operation.
    """
    
    object_attribute_list: List[AttributeKeyAndValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectAttributeList') }})
    object_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    schema_facet: SchemaFacet = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaFacet') }})
    
