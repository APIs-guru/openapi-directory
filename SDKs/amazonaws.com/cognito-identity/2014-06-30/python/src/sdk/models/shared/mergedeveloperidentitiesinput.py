from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MergeDeveloperIdentitiesInput:
    r"""MergeDeveloperIdentitiesInput
    Input to the <code>MergeDeveloperIdentities</code> action.
    """
    
    destination_user_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationUserIdentifier') }})
    developer_provider_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeveloperProviderName') }})
    identity_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    source_user_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceUserIdentifier') }})
    
