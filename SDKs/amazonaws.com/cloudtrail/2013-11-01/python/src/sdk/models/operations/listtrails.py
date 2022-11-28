from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListTrailsQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListTrailsXAmzTargetEnum(str, Enum):
    COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL_20131101_LIST_TRAILS = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails"


@dataclass
class ListTrailsHeaders:
    x_amz_target: ListTrailsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTrailsRequest:
    headers: ListTrailsHeaders = field()
    query_params: ListTrailsQueryParams = field()
    request: shared.ListTrailsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListTrailsResponse:
    content_type: str = field()
    status_code: int = field()
    list_trails_response: Optional[shared.ListTrailsResponse] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
