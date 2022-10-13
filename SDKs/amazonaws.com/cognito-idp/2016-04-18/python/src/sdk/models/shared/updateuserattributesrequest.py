from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributetype


@dataclass_json
@dataclass
class UpdateUserAttributesRequest:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    client_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientMetadata' }})
    user_attributes: List[attributetype.AttributeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserAttributes' }})
    
