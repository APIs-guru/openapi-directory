from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateConnectionAPIKeyAuthRequestParameters:
    api_key_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiKeyName' }})
    api_key_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiKeyValue' }})
    
