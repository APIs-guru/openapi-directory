from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import clientauthenticationtype_enum


@dataclass_json
@dataclass
class DescribeClientAuthenticationSettingsRequest:
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    type: Optional[clientauthenticationtype_enum.ClientAuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
