from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ssoidentity


@dataclass_json
@dataclass
class RecipientDetail:
    sso_identity: Optional[ssoidentity.SsoIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssoIdentity' }})
    
