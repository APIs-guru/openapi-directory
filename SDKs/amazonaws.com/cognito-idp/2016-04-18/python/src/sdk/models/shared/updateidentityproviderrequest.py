from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateIdentityProviderRequest:
    attribute_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeMapping' }})
    idp_identifiers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdpIdentifiers' }})
    provider_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderDetails' }})
    provider_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderName' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
