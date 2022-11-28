from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetInterpolatedAssetPropertyValuesQualityEnum(str, Enum):
    GOOD = "GOOD"
    BAD = "BAD"
    UNCERTAIN = "UNCERTAIN"


@dataclass
class GetInterpolatedAssetPropertyValuesQueryParams:
    end_time_in_seconds: int = field(metadata={'query_param': { 'field_name': 'endTimeInSeconds', 'style': 'form', 'explode': True }})
    interval_in_seconds: int = field(metadata={'query_param': { 'field_name': 'intervalInSeconds', 'style': 'form', 'explode': True }})
    quality: GetInterpolatedAssetPropertyValuesQualityEnum = field(metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    start_time_in_seconds: int = field(metadata={'query_param': { 'field_name': 'startTimeInSeconds', 'style': 'form', 'explode': True }})
    type: str = field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    asset_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'assetId', 'style': 'form', 'explode': True }})
    end_time_offset_in_nanos: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endTimeOffsetInNanos', 'style': 'form', 'explode': True }})
    interval_window_in_seconds: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'intervalWindowInSeconds', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    property_alias: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'propertyAlias', 'style': 'form', 'explode': True }})
    property_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'propertyId', 'style': 'form', 'explode': True }})
    start_time_offset_in_nanos: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startTimeOffsetInNanos', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInterpolatedAssetPropertyValuesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInterpolatedAssetPropertyValuesRequest:
    headers: GetInterpolatedAssetPropertyValuesHeaders = field()
    query_params: GetInterpolatedAssetPropertyValuesQueryParams = field()
    

@dataclass
class GetInterpolatedAssetPropertyValuesResponse:
    content_type: str = field()
    status_code: int = field()
    get_interpolated_asset_property_values_response: Optional[shared.GetInterpolatedAssetPropertyValuesResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
