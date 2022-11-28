from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteIdentityProviderRequest:
    provider_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderName') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
