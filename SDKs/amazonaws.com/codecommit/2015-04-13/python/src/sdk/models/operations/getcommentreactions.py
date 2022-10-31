from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetCommentReactionsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class GetCommentReactionsXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_GET_COMMENT_REACTIONS = "CodeCommit_20150413.GetCommentReactions"


@dataclass
class GetCommentReactionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetCommentReactionsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCommentReactionsRequest:
    query_params: GetCommentReactionsQueryParams = field(default=None)
    headers: GetCommentReactionsHeaders = field(default=None)
    request: shared.GetCommentReactionsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetCommentReactionsResponse:
    comment_deleted_exception: Optional[Any] = field(default=None)
    comment_does_not_exist_exception: Optional[Any] = field(default=None)
    comment_id_required_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_comment_reactions_output: Optional[shared.GetCommentReactionsOutput] = field(default=None)
    invalid_comment_id_exception: Optional[Any] = field(default=None)
    invalid_continuation_token_exception: Optional[Any] = field(default=None)
    invalid_max_results_exception: Optional[Any] = field(default=None)
    invalid_reaction_user_arn_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
