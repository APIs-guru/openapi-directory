from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceSecretVerifierConfigType:
    r"""DeviceSecretVerifierConfigType
    The device verifier against which it will be authenticated.
    """
    
    password_verifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PasswordVerifier') }})
    salt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salt') }})
    
