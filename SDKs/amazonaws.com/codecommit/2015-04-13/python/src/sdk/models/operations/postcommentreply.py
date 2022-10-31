from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PostCommentReplyXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_POST_COMMENT_REPLY = "CodeCommit_20150413.PostCommentReply"


@dataclass
class PostCommentReplyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: PostCommentReplyXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCommentReplyRequest:
    headers: PostCommentReplyHeaders = field(default=None)
    request: shared.PostCommentReplyInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCommentReplyResponse:
    client_request_token_required_exception: Optional[Any] = field(default=None)
    comment_content_required_exception: Optional[Any] = field(default=None)
    comment_content_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    comment_does_not_exist_exception: Optional[Any] = field(default=None)
    comment_id_required_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    idempotency_parameter_mismatch_exception: Optional[Any] = field(default=None)
    invalid_client_request_token_exception: Optional[Any] = field(default=None)
    invalid_comment_id_exception: Optional[Any] = field(default=None)
    post_comment_reply_output: Optional[shared.PostCommentReplyOutput] = field(default=None)
    status_code: int = field(default=None)
    
