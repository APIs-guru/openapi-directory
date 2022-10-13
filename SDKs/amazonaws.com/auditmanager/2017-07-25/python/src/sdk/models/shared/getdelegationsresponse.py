from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import delegationmetadata


@dataclass_json
@dataclass
class GetDelegationsResponse:
    delegations: Optional[List[delegationmetadata.DelegationMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delegations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
