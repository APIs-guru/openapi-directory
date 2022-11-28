from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListObjectParentsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    parent_links: Optional[List[ObjectIdentifierAndLinkNameTuple]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentLinks') }})
    parents: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parents') }})
    
