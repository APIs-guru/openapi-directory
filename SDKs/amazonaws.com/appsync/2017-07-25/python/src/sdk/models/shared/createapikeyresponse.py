from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import apikey


@dataclass_json
@dataclass
class CreateAPIKeyResponse:
    api_key: Optional[apikey.APIKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey' }})
    
