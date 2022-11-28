from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetObjectInformationResponse:
    r"""BatchGetObjectInformationResponse
    Represents the output of a <a>GetObjectInformation</a> response operation.
    """
    
    object_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectIdentifier') }})
    schema_facets: Optional[List[SchemaFacet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaFacets') }})
    
