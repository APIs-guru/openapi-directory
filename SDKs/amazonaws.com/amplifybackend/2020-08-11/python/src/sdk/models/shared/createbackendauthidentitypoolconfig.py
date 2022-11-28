from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateBackendAuthIdentityPoolConfig:
    r"""CreateBackendAuthIdentityPoolConfig
    Describes authorization configurations for the auth resources, configured as a part of your Amplify project.
    """
    
    identity_pool_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolName') }})
    unauthenticated_login: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnauthenticatedLogin') }})
    
