from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateConnectionOAuthClientRequestParameters:
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientID' }})
    client_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientSecret' }})
    
