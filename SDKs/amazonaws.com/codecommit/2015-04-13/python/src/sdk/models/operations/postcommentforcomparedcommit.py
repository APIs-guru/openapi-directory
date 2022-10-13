from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PostCommentForComparedCommitXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_POST_COMMENT_FOR_COMPARED_COMMIT = "CodeCommit_20150413.PostCommentForComparedCommit"


@dataclass
class PostCommentForComparedCommitHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: PostCommentForComparedCommitXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class PostCommentForComparedCommitRequest:
    headers: PostCommentForComparedCommitHeaders = field(default=None)
    request: shared.PostCommentForComparedCommitInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCommentForComparedCommitResponse:
    before_commit_id_and_after_commit_id_are_same_exception: Optional[Any] = field(default=None)
    client_request_token_required_exception: Optional[Any] = field(default=None)
    comment_content_required_exception: Optional[Any] = field(default=None)
    comment_content_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    commit_does_not_exist_exception: Optional[Any] = field(default=None)
    commit_id_required_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    idempotency_parameter_mismatch_exception: Optional[Any] = field(default=None)
    invalid_client_request_token_exception: Optional[Any] = field(default=None)
    invalid_commit_id_exception: Optional[Any] = field(default=None)
    invalid_file_location_exception: Optional[Any] = field(default=None)
    invalid_file_position_exception: Optional[Any] = field(default=None)
    invalid_path_exception: Optional[Any] = field(default=None)
    invalid_relative_file_version_enum_exception: Optional[Any] = field(default=None)
    invalid_repository_name_exception: Optional[Any] = field(default=None)
    path_does_not_exist_exception: Optional[Any] = field(default=None)
    path_required_exception: Optional[Any] = field(default=None)
    post_comment_for_compared_commit_output: Optional[shared.PostCommentForComparedCommitOutput] = field(default=None)
    repository_does_not_exist_exception: Optional[Any] = field(default=None)
    repository_name_required_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
