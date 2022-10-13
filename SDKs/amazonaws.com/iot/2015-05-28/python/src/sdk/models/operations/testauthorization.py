from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TestAuthorizationQueryParams:
    client_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientId', 'style': 'form', 'explode': True }})
    

@dataclass
class TestAuthorizationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class TestAuthorizationRequestBody:
    auth_infos: List[shared.AuthInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authInfos' }})
    cognito_identity_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cognitoIdentityPoolId' }})
    policy_names_to_add: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyNamesToAdd' }})
    policy_names_to_skip: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyNamesToSkip' }})
    principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principal' }})
    

@dataclass
class TestAuthorizationRequest:
    query_params: TestAuthorizationQueryParams = field(default=None)
    headers: TestAuthorizationHeaders = field(default=None)
    request: TestAuthorizationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TestAuthorizationResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    test_authorization_response: Optional[shared.TestAuthorizationResponse] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
