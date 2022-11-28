from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OpenIDConnectConfig:
    r"""OpenIDConnectConfig
    Describes an OpenID Connect configuration.
    """
    
    issuer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    auth_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authTTL') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    iat_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iatTTL') }})
    
