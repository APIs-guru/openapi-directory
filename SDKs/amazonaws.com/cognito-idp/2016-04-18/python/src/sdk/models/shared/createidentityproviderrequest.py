from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateIdentityProviderRequest:
    provider_details: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderDetails') }})
    provider_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderName') }})
    provider_type: IdentityProviderTypeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderType') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    attribute_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeMapping') }})
    idp_identifiers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdpIdentifiers') }})
    
