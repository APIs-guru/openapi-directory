from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListTagsForProjectXAmzTargetEnum(str, Enum):
    CODE_STAR_20170419_LIST_TAGS_FOR_PROJECT = "CodeStar_20170419.ListTagsForProject"


@dataclass
class ListTagsForProjectHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListTagsForProjectXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTagsForProjectRequest:
    headers: ListTagsForProjectHeaders = field(default=None)
    request: shared.ListTagsForProjectRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListTagsForProjectResponse:
    content_type: str = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    list_tags_for_project_result: Optional[shared.ListTagsForProjectResult] = field(default=None)
    project_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
