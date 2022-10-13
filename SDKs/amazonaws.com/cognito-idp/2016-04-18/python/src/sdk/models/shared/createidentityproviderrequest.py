from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import identityprovidertypetype_enum


@dataclass_json
@dataclass
class CreateIdentityProviderRequest:
    attribute_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeMapping' }})
    idp_identifiers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdpIdentifiers' }})
    provider_details: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderDetails' }})
    provider_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderName' }})
    provider_type: identityprovidertypetype_enum.IdentityProviderTypeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderType' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
