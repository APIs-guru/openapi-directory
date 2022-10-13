from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AddTagsXAmzTargetEnum(str, Enum):
    COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL_20131101_ADD_TAGS = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags"


@dataclass
class AddTagsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: AddTagsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class AddTagsRequest:
    headers: AddTagsHeaders = field(default=None)
    request: shared.AddTagsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddTagsResponse:
    add_tags_response: Optional[dict[str, Any]] = field(default=None)
    cloud_trail_arn_invalid_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_tag_parameter_exception: Optional[Any] = field(default=None)
    invalid_trail_name_exception: Optional[Any] = field(default=None)
    not_organization_master_account_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    resource_type_not_supported_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tags_limit_exceeded_exception: Optional[Any] = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
