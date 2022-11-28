from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdateCommentXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_UPDATE_COMMENT = "CodeCommit_20150413.UpdateComment"


@dataclass
class UpdateCommentHeaders:
    x_amz_target: UpdateCommentXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCommentRequest:
    headers: UpdateCommentHeaders = field()
    request: shared.UpdateCommentInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCommentResponse:
    content_type: str = field()
    status_code: int = field()
    comment_content_required_exception: Optional[Any] = field(default=None)
    comment_content_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    comment_deleted_exception: Optional[Any] = field(default=None)
    comment_does_not_exist_exception: Optional[Any] = field(default=None)
    comment_id_required_exception: Optional[Any] = field(default=None)
    comment_not_created_by_caller_exception: Optional[Any] = field(default=None)
    invalid_comment_id_exception: Optional[Any] = field(default=None)
    update_comment_output: Optional[shared.UpdateCommentOutput] = field(default=None)
    
