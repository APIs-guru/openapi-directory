from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import clientauthenticationtype_enum


@dataclass_json
@dataclass
class DisableClientAuthenticationRequest:
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    type: clientauthenticationtype_enum.ClientAuthenticationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
