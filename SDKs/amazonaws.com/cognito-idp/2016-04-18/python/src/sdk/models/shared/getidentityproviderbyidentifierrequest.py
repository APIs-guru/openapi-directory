from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetIdentityProviderByIdentifierRequest:
    idp_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdpIdentifier') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
