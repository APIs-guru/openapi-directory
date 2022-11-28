from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetOpenIDTokenInput:
    r"""GetOpenIDTokenInput
    Input to the GetOpenIdToken action.
    """
    
    identity_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    logins: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Logins') }})
    
