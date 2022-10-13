from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListIdentitiesInput:
    hide_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HideDisabled' }})
    identity_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolId' }})
    max_results: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
