from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdatePullRequestApprovalStateXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_UPDATE_PULL_REQUEST_APPROVAL_STATE = "CodeCommit_20150413.UpdatePullRequestApprovalState"


@dataclass
class UpdatePullRequestApprovalStateHeaders:
    x_amz_target: UpdatePullRequestApprovalStateXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePullRequestApprovalStateRequest:
    headers: UpdatePullRequestApprovalStateHeaders = field()
    request: shared.UpdatePullRequestApprovalStateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePullRequestApprovalStateResponse:
    content_type: str = field()
    status_code: int = field()
    approval_state_required_exception: Optional[Any] = field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    invalid_approval_state_exception: Optional[Any] = field(default=None)
    invalid_pull_request_id_exception: Optional[Any] = field(default=None)
    invalid_revision_id_exception: Optional[Any] = field(default=None)
    maximum_number_of_approvals_exceeded_exception: Optional[Any] = field(default=None)
    pull_request_already_closed_exception: Optional[Any] = field(default=None)
    pull_request_cannot_be_approved_by_author_exception: Optional[Any] = field(default=None)
    pull_request_does_not_exist_exception: Optional[Any] = field(default=None)
    pull_request_id_required_exception: Optional[Any] = field(default=None)
    revision_id_required_exception: Optional[Any] = field(default=None)
    revision_not_current_exception: Optional[Any] = field(default=None)
    
