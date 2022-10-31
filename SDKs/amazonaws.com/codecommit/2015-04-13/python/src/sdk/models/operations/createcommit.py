from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateCommitXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_CREATE_COMMIT = "CodeCommit_20150413.CreateCommit"


@dataclass
class CreateCommitHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateCommitXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCommitRequest:
    headers: CreateCommitHeaders = field(default=None)
    request: shared.CreateCommitInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCommitResponse:
    branch_does_not_exist_exception: Optional[Any] = field(default=None)
    branch_name_is_tag_name_exception: Optional[Any] = field(default=None)
    branch_name_required_exception: Optional[Any] = field(default=None)
    commit_message_length_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_commit_output: Optional[shared.CreateCommitOutput] = field(default=None)
    directory_name_conflicts_with_file_name_exception: Optional[Any] = field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    file_content_and_source_file_specified_exception: Optional[Any] = field(default=None)
    file_content_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    file_does_not_exist_exception: Optional[Any] = field(default=None)
    file_entry_required_exception: Optional[Any] = field(default=None)
    file_mode_required_exception: Optional[Any] = field(default=None)
    file_name_conflicts_with_directory_name_exception: Optional[Any] = field(default=None)
    file_path_conflicts_with_submodule_path_exception: Optional[Any] = field(default=None)
    folder_content_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    invalid_branch_name_exception: Optional[Any] = field(default=None)
    invalid_deletion_parameter_exception: Optional[Any] = field(default=None)
    invalid_email_exception: Optional[Any] = field(default=None)
    invalid_file_mode_exception: Optional[Any] = field(default=None)
    invalid_parent_commit_id_exception: Optional[Any] = field(default=None)
    invalid_path_exception: Optional[Any] = field(default=None)
    invalid_repository_name_exception: Optional[Any] = field(default=None)
    maximum_file_entries_exceeded_exception: Optional[Any] = field(default=None)
    name_length_exceeded_exception: Optional[Any] = field(default=None)
    no_change_exception: Optional[Any] = field(default=None)
    parent_commit_does_not_exist_exception: Optional[Any] = field(default=None)
    parent_commit_id_outdated_exception: Optional[Any] = field(default=None)
    parent_commit_id_required_exception: Optional[Any] = field(default=None)
    path_required_exception: Optional[Any] = field(default=None)
    put_file_entry_conflict_exception: Optional[Any] = field(default=None)
    repository_does_not_exist_exception: Optional[Any] = field(default=None)
    repository_name_required_exception: Optional[Any] = field(default=None)
    restricted_source_file_exception: Optional[Any] = field(default=None)
    same_path_request_exception: Optional[Any] = field(default=None)
    source_file_or_content_required_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
