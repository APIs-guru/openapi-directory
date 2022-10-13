from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import newdevicemetadatatype


@dataclass_json
@dataclass
class AuthenticationResultType:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpiresIn' }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdToken' }})
    new_device_metadata: Optional[newdevicemetadatatype.NewDeviceMetadataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewDeviceMetadata' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RefreshToken' }})
    token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TokenType' }})
    
