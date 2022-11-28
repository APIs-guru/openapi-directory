from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProviderUserIdentifierType:
    r"""ProviderUserIdentifierType
    A container for information about an identity provider for a user pool.
    """
    
    provider_attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderAttributeName') }})
    provider_attribute_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderAttributeValue') }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderName') }})
    
