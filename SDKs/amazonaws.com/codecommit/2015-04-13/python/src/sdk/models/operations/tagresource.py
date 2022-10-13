from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class TagResourceXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_TAG_RESOURCE = "CodeCommit_20150413.TagResource"


@dataclass
class TagResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: TagResourceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class TagResourceRequest:
    headers: TagResourceHeaders = field(default=None)
    request: shared.TagResourceInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TagResourceResponse:
    content_type: str = field(default=None)
    invalid_repository_name_exception: Optional[Any] = field(default=None)
    invalid_resource_arn_exception: Optional[Any] = field(default=None)
    invalid_system_tag_usage_exception: Optional[Any] = field(default=None)
    invalid_tags_map_exception: Optional[Any] = field(default=None)
    repository_does_not_exist_exception: Optional[Any] = field(default=None)
    resource_arn_required_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tag_policy_exception: Optional[Any] = field(default=None)
    tags_map_required_exception: Optional[Any] = field(default=None)
    too_many_tags_exception: Optional[Any] = field(default=None)
    
