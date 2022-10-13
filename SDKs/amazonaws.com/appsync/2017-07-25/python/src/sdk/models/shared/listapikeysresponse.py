from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apikey


@dataclass_json
@dataclass
class ListAPIKeysResponse:
    api_keys: Optional[List[apikey.APIKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeys' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
