from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class MergePullRequestByFastForwardXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_MERGE_PULL_REQUEST_BY_FAST_FORWARD = "CodeCommit_20150413.MergePullRequestByFastForward"


@dataclass
class MergePullRequestByFastForwardHeaders:
    x_amz_target: MergePullRequestByFastForwardXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class MergePullRequestByFastForwardRequest:
    headers: MergePullRequestByFastForwardHeaders = field()
    request: shared.MergePullRequestByFastForwardInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MergePullRequestByFastForwardResponse:
    content_type: str = field()
    status_code: int = field()
    concurrent_reference_update_exception: Optional[Any] = field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    invalid_commit_id_exception: Optional[Any] = field(default=None)
    invalid_pull_request_id_exception: Optional[Any] = field(default=None)
    invalid_repository_name_exception: Optional[Any] = field(default=None)
    manual_merge_required_exception: Optional[Any] = field(default=None)
    merge_pull_request_by_fast_forward_output: Optional[shared.MergePullRequestByFastForwardOutput] = field(default=None)
    pull_request_already_closed_exception: Optional[Any] = field(default=None)
    pull_request_approval_rules_not_satisfied_exception: Optional[Any] = field(default=None)
    pull_request_does_not_exist_exception: Optional[Any] = field(default=None)
    pull_request_id_required_exception: Optional[Any] = field(default=None)
    reference_does_not_exist_exception: Optional[Any] = field(default=None)
    repository_does_not_exist_exception: Optional[Any] = field(default=None)
    repository_name_required_exception: Optional[Any] = field(default=None)
    repository_not_associated_with_pull_request_exception: Optional[Any] = field(default=None)
    tip_of_source_reference_is_different_exception: Optional[Any] = field(default=None)
    
