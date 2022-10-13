from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateConnectionAPIKeyAuthRequestParameters:
    api_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiKeyName' }})
    api_key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiKeyValue' }})
    
