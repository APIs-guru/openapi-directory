from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetInsightSelectorsXAmzTargetEnum(str, Enum):
    COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL_20131101_GET_INSIGHT_SELECTORS = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors"


@dataclass
class GetInsightSelectorsHeaders:
    x_amz_target: GetInsightSelectorsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInsightSelectorsRequest:
    headers: GetInsightSelectorsHeaders = field()
    request: shared.GetInsightSelectorsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetInsightSelectorsResponse:
    content_type: str = field()
    status_code: int = field()
    get_insight_selectors_response: Optional[shared.GetInsightSelectorsResponse] = field(default=None)
    insight_not_enabled_exception: Optional[Any] = field(default=None)
    invalid_trail_name_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    trail_not_found_exception: Optional[Any] = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
