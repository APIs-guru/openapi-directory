from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class TagProjectXAmzTargetEnum(str, Enum):
    CODE_STAR_20170419_TAG_PROJECT = "CodeStar_20170419.TagProject"


@dataclass
class TagProjectHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: TagProjectXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class TagProjectRequest:
    headers: TagProjectHeaders = field(default=None)
    request: shared.TagProjectRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TagProjectResponse:
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    project_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tag_project_result: Optional[shared.TagProjectResult] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
