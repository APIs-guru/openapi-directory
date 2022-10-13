from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SoftwareTokenMfaSettingsType:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    preferred_mfa: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredMfa' }})
    
