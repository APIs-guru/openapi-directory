from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OidcIdentityProviderConfig:
    r"""OidcIdentityProviderConfig
    An object that represents the configuration for an OpenID Connect (OIDC) identity provider. 
    """
    
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    groups_claim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupsClaim') }})
    groups_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupsPrefix') }})
    identity_provider_config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityProviderConfigArn') }})
    identity_provider_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityProviderConfigName') }})
    issuer_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuerUrl') }})
    required_claims: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredClaims') }})
    status: Optional[ConfigStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    username_claim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usernameClaim') }})
    username_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usernamePrefix') }})
    
