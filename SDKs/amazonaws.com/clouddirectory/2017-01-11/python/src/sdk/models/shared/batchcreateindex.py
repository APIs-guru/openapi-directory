from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchCreateIndex:
    r"""BatchCreateIndex
    Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    is_unique: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsUnique') }})
    ordered_indexed_attribute_list: List[AttributeKey] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderedIndexedAttributeList') }})
    batch_reference_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchReferenceName') }})
    link_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinkName') }})
    parent_reference: Optional[ObjectReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentReference') }})
    
