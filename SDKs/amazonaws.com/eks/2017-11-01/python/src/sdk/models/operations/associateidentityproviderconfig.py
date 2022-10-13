from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AssociateIdentityProviderConfigPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateIdentityProviderConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class AssociateIdentityProviderConfigRequestBodyOidc:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    groups_claim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupsClaim' }})
    groups_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupsPrefix' }})
    identity_provider_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityProviderConfigName' }})
    issuer_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuerUrl' }})
    required_claims: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredClaims' }})
    username_claim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usernameClaim' }})
    username_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usernamePrefix' }})
    

@dataclass_json
@dataclass
class AssociateIdentityProviderConfigRequestBody:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    oidc: AssociateIdentityProviderConfigRequestBodyOidc = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oidc' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class AssociateIdentityProviderConfigRequest:
    path_params: AssociateIdentityProviderConfigPathParams = field(default=None)
    headers: AssociateIdentityProviderConfigHeaders = field(default=None)
    request: AssociateIdentityProviderConfigRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateIdentityProviderConfigResponse:
    associate_identity_provider_config_response: Optional[shared.AssociateIdentityProviderConfigResponse] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
