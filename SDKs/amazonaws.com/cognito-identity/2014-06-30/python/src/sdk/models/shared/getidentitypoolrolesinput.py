from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetIdentityPoolRolesInput:
    r"""GetIdentityPoolRolesInput
    Input to the <code>GetIdentityPoolRoles</code> action.
    """
    
    identity_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    
