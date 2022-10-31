from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListRepositoriesQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListRepositoriesXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_LIST_REPOSITORIES = "CodeCommit_20150413.ListRepositories"


@dataclass
class ListRepositoriesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListRepositoriesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRepositoriesRequest:
    query_params: ListRepositoriesQueryParams = field(default=None)
    headers: ListRepositoriesHeaders = field(default=None)
    request: shared.ListRepositoriesInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListRepositoriesResponse:
    content_type: str = field(default=None)
    invalid_continuation_token_exception: Optional[Any] = field(default=None)
    invalid_order_exception: Optional[Any] = field(default=None)
    invalid_sort_by_exception: Optional[Any] = field(default=None)
    list_repositories_output: Optional[shared.ListRepositoriesOutput] = field(default=None)
    status_code: int = field(default=None)
    
