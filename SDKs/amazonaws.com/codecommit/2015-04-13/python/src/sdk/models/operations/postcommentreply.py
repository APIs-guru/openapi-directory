from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PostCommentReplyXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_POST_COMMENT_REPLY = "CodeCommit_20150413.PostCommentReply"


@dataclass
class PostCommentReplyHeaders:
    x_amz_target: PostCommentReplyXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCommentReplyRequest:
    headers: PostCommentReplyHeaders = field()
    request: shared.PostCommentReplyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCommentReplyResponse:
    content_type: str = field()
    status_code: int = field()
    client_request_token_required_exception: Optional[Any] = field(default=None)
    comment_content_required_exception: Optional[Any] = field(default=None)
    comment_content_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    comment_does_not_exist_exception: Optional[Any] = field(default=None)
    comment_id_required_exception: Optional[Any] = field(default=None)
    idempotency_parameter_mismatch_exception: Optional[Any] = field(default=None)
    invalid_client_request_token_exception: Optional[Any] = field(default=None)
    invalid_comment_id_exception: Optional[Any] = field(default=None)
    post_comment_reply_output: Optional[shared.PostCommentReplyOutput] = field(default=None)
    
