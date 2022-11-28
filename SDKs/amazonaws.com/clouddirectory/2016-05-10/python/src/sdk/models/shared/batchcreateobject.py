from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchCreateObject:
    r"""BatchCreateObject
    Represents the output of a <a>CreateObject</a> operation.
    """
    
    object_attribute_list: List[AttributeKeyAndValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectAttributeList') }})
    schema_facet: List[SchemaFacet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaFacet') }})
    batch_reference_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchReferenceName') }})
    link_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinkName') }})
    parent_reference: Optional[ObjectReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentReference') }})
    
