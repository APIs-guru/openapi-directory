from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class GetAssetPropertyAggregatesTimeOrderingEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass
class GetAssetPropertyAggregatesQueryParams:
    aggregate_types: List[shared.AggregateTypeEnum] = field(metadata={'query_param': { 'field_name': 'aggregateTypes', 'style': 'form', 'explode': True }})
    end_date: datetime = field(metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    resolution: str = field(metadata={'query_param': { 'field_name': 'resolution', 'style': 'form', 'explode': True }})
    start_date: datetime = field(metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    asset_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'assetId', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    property_alias: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'propertyAlias', 'style': 'form', 'explode': True }})
    property_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'propertyId', 'style': 'form', 'explode': True }})
    qualities: Optional[List[shared.QualityEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'qualities', 'style': 'form', 'explode': True }})
    time_ordering: Optional[GetAssetPropertyAggregatesTimeOrderingEnum] = field(default=None, metadata={'query_param': { 'field_name': 'timeOrdering', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAssetPropertyAggregatesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssetPropertyAggregatesRequest:
    headers: GetAssetPropertyAggregatesHeaders = field()
    query_params: GetAssetPropertyAggregatesQueryParams = field()
    

@dataclass
class GetAssetPropertyAggregatesResponse:
    content_type: str = field()
    status_code: int = field()
    get_asset_property_aggregates_response: Optional[shared.GetAssetPropertyAggregatesResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
