from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetObjectAttributes:
    r"""BatchGetObjectAttributes
    Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    attribute_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeNames') }})
    object_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    schema_facet: SchemaFacet = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaFacet') }})
    
