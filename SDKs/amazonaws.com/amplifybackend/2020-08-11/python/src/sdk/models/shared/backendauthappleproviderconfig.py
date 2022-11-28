from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BackendAuthAppleProviderConfig:
    r"""BackendAuthAppleProviderConfig
    Describes Apple social federation configurations for allowing your app users to sign in using OAuth.
    """
    
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateKey') }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TeamId') }})
    
