from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeleteGitHubAccountTokenXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_DELETE_GIT_HUB_ACCOUNT_TOKEN = "CodeDeploy_20141006.DeleteGitHubAccountToken"


@dataclass
class DeleteGitHubAccountTokenHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DeleteGitHubAccountTokenXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DeleteGitHubAccountTokenRequest:
    headers: DeleteGitHubAccountTokenHeaders = field(default=None)
    request: shared.DeleteGitHubAccountTokenInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteGitHubAccountTokenResponse:
    content_type: str = field(default=None)
    delete_git_hub_account_token_output: Optional[shared.DeleteGitHubAccountTokenOutput] = field(default=None)
    git_hub_account_token_does_not_exist_exception: Optional[Any] = field(default=None)
    git_hub_account_token_name_required_exception: Optional[Any] = field(default=None)
    invalid_git_hub_account_token_name_exception: Optional[Any] = field(default=None)
    operation_not_supported_exception: Optional[Any] = field(default=None)
    resource_validation_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
