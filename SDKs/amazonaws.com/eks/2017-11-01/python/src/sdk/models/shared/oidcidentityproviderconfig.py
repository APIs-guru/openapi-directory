from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configstatus_enum


@dataclass_json
@dataclass
class OidcIdentityProviderConfig:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterName' }})
    groups_claim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupsClaim' }})
    groups_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupsPrefix' }})
    identity_provider_config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityProviderConfigArn' }})
    identity_provider_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityProviderConfigName' }})
    issuer_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuerUrl' }})
    required_claims: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredClaims' }})
    status: Optional[configstatus_enum.ConfigStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    username_claim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usernameClaim' }})
    username_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usernamePrefix' }})
    
