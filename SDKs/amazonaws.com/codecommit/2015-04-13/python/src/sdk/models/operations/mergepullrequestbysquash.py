from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class MergePullRequestBySquashXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_MERGE_PULL_REQUEST_BY_SQUASH = "CodeCommit_20150413.MergePullRequestBySquash"


@dataclass
class MergePullRequestBySquashHeaders:
    x_amz_target: MergePullRequestBySquashXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class MergePullRequestBySquashRequest:
    headers: MergePullRequestBySquashHeaders = field()
    request: shared.MergePullRequestBySquashInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MergePullRequestBySquashResponse:
    content_type: str = field()
    status_code: int = field()
    commit_message_length_exceeded_exception: Optional[Any] = field(default=None)
    concurrent_reference_update_exception: Optional[Any] = field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    file_content_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    folder_content_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    invalid_commit_id_exception: Optional[Any] = field(default=None)
    invalid_conflict_detail_level_exception: Optional[Any] = field(default=None)
    invalid_conflict_resolution_exception: Optional[Any] = field(default=None)
    invalid_conflict_resolution_strategy_exception: Optional[Any] = field(default=None)
    invalid_email_exception: Optional[Any] = field(default=None)
    invalid_file_mode_exception: Optional[Any] = field(default=None)
    invalid_path_exception: Optional[Any] = field(default=None)
    invalid_pull_request_id_exception: Optional[Any] = field(default=None)
    invalid_replacement_content_exception: Optional[Any] = field(default=None)
    invalid_replacement_type_exception: Optional[Any] = field(default=None)
    invalid_repository_name_exception: Optional[Any] = field(default=None)
    manual_merge_required_exception: Optional[Any] = field(default=None)
    maximum_conflict_resolution_entries_exceeded_exception: Optional[Any] = field(default=None)
    maximum_file_content_to_load_exceeded_exception: Optional[Any] = field(default=None)
    maximum_items_to_compare_exceeded_exception: Optional[Any] = field(default=None)
    merge_pull_request_by_squash_output: Optional[shared.MergePullRequestBySquashOutput] = field(default=None)
    multiple_conflict_resolution_entries_exception: Optional[Any] = field(default=None)
    name_length_exceeded_exception: Optional[Any] = field(default=None)
    path_required_exception: Optional[Any] = field(default=None)
    pull_request_already_closed_exception: Optional[Any] = field(default=None)
    pull_request_approval_rules_not_satisfied_exception: Optional[Any] = field(default=None)
    pull_request_does_not_exist_exception: Optional[Any] = field(default=None)
    pull_request_id_required_exception: Optional[Any] = field(default=None)
    replacement_content_required_exception: Optional[Any] = field(default=None)
    replacement_type_required_exception: Optional[Any] = field(default=None)
    repository_does_not_exist_exception: Optional[Any] = field(default=None)
    repository_name_required_exception: Optional[Any] = field(default=None)
    repository_not_associated_with_pull_request_exception: Optional[Any] = field(default=None)
    tip_of_source_reference_is_different_exception: Optional[Any] = field(default=None)
    tips_divergence_exceeded_exception: Optional[Any] = field(default=None)
    
