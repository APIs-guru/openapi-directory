from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clientauthenticationsettinginfo


@dataclass_json
@dataclass
class DescribeClientAuthenticationSettingsResult:
    client_authentication_settings_info: Optional[List[clientauthenticationsettinginfo.ClientAuthenticationSettingInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientAuthenticationSettingsInfo' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
