from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import integration


@dataclass_json
@dataclass
class GetIntegrationsResponse:
    items: Optional[List[integration.Integration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
