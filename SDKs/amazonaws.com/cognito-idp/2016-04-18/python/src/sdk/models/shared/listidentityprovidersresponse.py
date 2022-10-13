from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import providerdescription


@dataclass_json
@dataclass
class ListIdentityProvidersResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    providers: List[providerdescription.ProviderDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Providers' }})
    
