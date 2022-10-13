from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ldapssettinginfo


@dataclass_json
@dataclass
class DescribeLdapsSettingsResult:
    ldaps_settings_info: Optional[List[ldapssettinginfo.LdapsSettingInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LDAPSSettingsInfo' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
