from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutCommentReactionXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_PUT_COMMENT_REACTION = "CodeCommit_20150413.PutCommentReaction"


@dataclass
class PutCommentReactionHeaders:
    x_amz_target: PutCommentReactionXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCommentReactionRequest:
    headers: PutCommentReactionHeaders = field()
    request: shared.PutCommentReactionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCommentReactionResponse:
    content_type: str = field()
    status_code: int = field()
    comment_deleted_exception: Optional[Any] = field(default=None)
    comment_does_not_exist_exception: Optional[Any] = field(default=None)
    comment_id_required_exception: Optional[Any] = field(default=None)
    invalid_comment_id_exception: Optional[Any] = field(default=None)
    invalid_reaction_value_exception: Optional[Any] = field(default=None)
    reaction_limit_exceeded_exception: Optional[Any] = field(default=None)
    reaction_value_required_exception: Optional[Any] = field(default=None)
    
