from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import objectidentifierandlinknametuple


@dataclass_json
@dataclass
class BatchListObjectParentsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    parent_links: Optional[List[objectidentifierandlinknametuple.ObjectIdentifierAndLinkNameTuple]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentLinks' }})
    
