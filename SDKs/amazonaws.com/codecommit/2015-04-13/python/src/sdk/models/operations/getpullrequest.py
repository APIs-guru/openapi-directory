from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetPullRequestXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_GET_PULL_REQUEST = "CodeCommit_20150413.GetPullRequest"


@dataclass
class GetPullRequestHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetPullRequestXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPullRequestRequest:
    headers: GetPullRequestHeaders = field(default=None)
    request: shared.GetPullRequestInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetPullRequestResponse:
    content_type: str = field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    get_pull_request_output: Optional[shared.GetPullRequestOutput] = field(default=None)
    invalid_pull_request_id_exception: Optional[Any] = field(default=None)
    pull_request_does_not_exist_exception: Optional[Any] = field(default=None)
    pull_request_id_required_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
