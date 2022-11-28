from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PostCommentForComparedCommitXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_POST_COMMENT_FOR_COMPARED_COMMIT = "CodeCommit_20150413.PostCommentForComparedCommit"


@dataclass
class PostCommentForComparedCommitHeaders:
    x_amz_target: PostCommentForComparedCommitXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCommentForComparedCommitRequest:
    headers: PostCommentForComparedCommitHeaders = field()
    request: shared.PostCommentForComparedCommitInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCommentForComparedCommitResponse:
    content_type: str = field()
    status_code: int = field()
    before_commit_id_and_after_commit_id_are_same_exception: Optional[Any] = field(default=None)
    client_request_token_required_exception: Optional[Any] = field(default=None)
    comment_content_required_exception: Optional[Any] = field(default=None)
    comment_content_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    commit_does_not_exist_exception: Optional[Any] = field(default=None)
    commit_id_required_exception: Optional[Any] = field(default=None)
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
    
