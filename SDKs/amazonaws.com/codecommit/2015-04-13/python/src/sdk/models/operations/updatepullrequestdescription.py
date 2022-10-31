from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdatePullRequestDescriptionXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_UPDATE_PULL_REQUEST_DESCRIPTION = "CodeCommit_20150413.UpdatePullRequestDescription"


@dataclass
class UpdatePullRequestDescriptionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: UpdatePullRequestDescriptionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePullRequestDescriptionRequest:
    headers: UpdatePullRequestDescriptionHeaders = field(default=None)
    request: shared.UpdatePullRequestDescriptionInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePullRequestDescriptionResponse:
    content_type: str = field(default=None)
    invalid_description_exception: Optional[Any] = field(default=None)
    invalid_pull_request_id_exception: Optional[Any] = field(default=None)
    pull_request_already_closed_exception: Optional[Any] = field(default=None)
    pull_request_does_not_exist_exception: Optional[Any] = field(default=None)
    pull_request_id_required_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_pull_request_description_output: Optional[shared.UpdatePullRequestDescriptionOutput] = field(default=None)
    
