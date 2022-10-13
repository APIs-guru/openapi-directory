from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdatePullRequestTitleXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_UPDATE_PULL_REQUEST_TITLE = "CodeCommit_20150413.UpdatePullRequestTitle"


@dataclass
class UpdatePullRequestTitleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdatePullRequestTitleXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdatePullRequestTitleRequest:
    headers: UpdatePullRequestTitleHeaders = field(default=None)
    request: shared.UpdatePullRequestTitleInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePullRequestTitleResponse:
    content_type: str = field(default=None)
    invalid_pull_request_id_exception: Optional[Any] = field(default=None)
    invalid_title_exception: Optional[Any] = field(default=None)
    pull_request_already_closed_exception: Optional[Any] = field(default=None)
    pull_request_does_not_exist_exception: Optional[Any] = field(default=None)
    pull_request_id_required_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    title_required_exception: Optional[Any] = field(default=None)
    update_pull_request_title_output: Optional[shared.UpdatePullRequestTitleOutput] = field(default=None)
    
