from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchRemoveFacetFromObject:
    r"""BatchRemoveFacetFromObject
    A batch operation to remove a facet from an object.
    """
    
    object_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    schema_facet: SchemaFacet = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaFacet') }})
    
