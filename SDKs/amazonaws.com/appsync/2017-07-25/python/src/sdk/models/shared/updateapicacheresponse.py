from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import apicache


@dataclass_json
@dataclass
class UpdateAPICacheResponse:
    api_cache: Optional[apicache.APICache] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiCache' }})
    
