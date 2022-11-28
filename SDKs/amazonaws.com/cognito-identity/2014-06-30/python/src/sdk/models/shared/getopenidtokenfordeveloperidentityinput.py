from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetOpenIDTokenForDeveloperIdentityInput:
    r"""GetOpenIDTokenForDeveloperIdentityInput
    Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action.
    """
    
    identity_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    logins: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Logins') }})
    identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    principal_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalTags') }})
    token_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenDuration') }})
    
