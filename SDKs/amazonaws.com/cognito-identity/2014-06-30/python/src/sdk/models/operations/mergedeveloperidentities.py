from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class MergeDeveloperIdentitiesXAmzTargetEnum(str, Enum):
    AWS_COGNITO_IDENTITY_SERVICE_MERGE_DEVELOPER_IDENTITIES = "AWSCognitoIdentityService.MergeDeveloperIdentities"


@dataclass
class MergeDeveloperIdentitiesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: MergeDeveloperIdentitiesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class MergeDeveloperIdentitiesRequest:
    headers: MergeDeveloperIdentitiesHeaders = field(default=None)
    request: shared.MergeDeveloperIdentitiesInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MergeDeveloperIdentitiesResponse:
    content_type: str = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    merge_developer_identities_response: Optional[shared.MergeDeveloperIdentitiesResponse] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
