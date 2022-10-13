from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetUserAttributeVerificationCodeRequest:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    attribute_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeName' }})
    client_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientMetadata' }})
    
