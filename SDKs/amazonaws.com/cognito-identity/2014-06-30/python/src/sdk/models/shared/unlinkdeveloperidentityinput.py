from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UnlinkDeveloperIdentityInput:
    r"""UnlinkDeveloperIdentityInput
    Input to the <code>UnlinkDeveloperIdentity</code> action.
    """
    
    developer_provider_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeveloperProviderName') }})
    developer_user_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeveloperUserIdentifier') }})
    identity_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    identity_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    
