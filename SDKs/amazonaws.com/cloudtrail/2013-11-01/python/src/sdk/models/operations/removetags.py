from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class RemoveTagsXAmzTargetEnum(str, Enum):
    COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL_20131101_REMOVE_TAGS = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags"


@dataclass
class RemoveTagsHeaders:
    x_amz_target: RemoveTagsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveTagsRequest:
    headers: RemoveTagsHeaders = field()
    request: shared.RemoveTagsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveTagsResponse:
    content_type: str = field()
    status_code: int = field()
    cloud_trail_arn_invalid_exception: Optional[Any] = field(default=None)
    invalid_tag_parameter_exception: Optional[Any] = field(default=None)
    invalid_trail_name_exception: Optional[Any] = field(default=None)
    not_organization_master_account_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    remove_tags_response: Optional[dict[str, Any]] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    resource_type_not_supported_exception: Optional[Any] = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
