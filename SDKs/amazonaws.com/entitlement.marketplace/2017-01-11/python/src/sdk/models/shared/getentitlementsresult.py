from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entitlement


@dataclass_json
@dataclass
class GetEntitlementsResult:
    entitlements: Optional[List[entitlement.Entitlement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entitlements' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
