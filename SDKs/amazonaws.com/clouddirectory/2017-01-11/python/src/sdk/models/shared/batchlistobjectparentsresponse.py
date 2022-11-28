from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchListObjectParentsResponse:
    r"""BatchListObjectParentsResponse
    Represents the output of a <a>ListObjectParents</a> response operation.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    parent_links: Optional[List[ObjectIdentifierAndLinkNameTuple]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentLinks') }})
    
