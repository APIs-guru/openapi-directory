from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DeleteGitHubAccountTokenXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_DELETE_GIT_HUB_ACCOUNT_TOKEN = "CodeDeploy_20141006.DeleteGitHubAccountToken"


@dataclass
class DeleteGitHubAccountTokenHeaders:
    x_amz_target: DeleteGitHubAccountTokenXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGitHubAccountTokenRequest:
    headers: DeleteGitHubAccountTokenHeaders = field()
    request: shared.DeleteGitHubAccountTokenInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteGitHubAccountTokenResponse:
    content_type: str = field()
    status_code: int = field()
    delete_git_hub_account_token_output: Optional[shared.DeleteGitHubAccountTokenOutput] = field(default=None)
    git_hub_account_token_does_not_exist_exception: Optional[Any] = field(default=None)
    git_hub_account_token_name_required_exception: Optional[Any] = field(default=None)
    invalid_git_hub_account_token_name_exception: Optional[Any] = field(default=None)
    operation_not_supported_exception: Optional[Any] = field(default=None)
    resource_validation_exception: Optional[Any] = field(default=None)
    
