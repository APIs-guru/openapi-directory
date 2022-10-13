from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateFleetMetricPathParams:
    metric_name: str = field(default=None, metadata={'path_param': { 'field_name': 'metricName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFleetMetricHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateFleetMetricRequestBodyAggregationType:
    name: Optional[shared.AggregationTypeNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
class CreateFleetMetricRequestBodyUnitEnum(str, Enum):
    SECONDS = "Seconds"
    MICROSECONDS = "Microseconds"
    MILLISECONDS = "Milliseconds"
    BYTES = "Bytes"
    KILOBYTES = "Kilobytes"
    MEGABYTES = "Megabytes"
    GIGABYTES = "Gigabytes"
    TERABYTES = "Terabytes"
    BITS = "Bits"
    KILOBITS = "Kilobits"
    MEGABITS = "Megabits"
    GIGABITS = "Gigabits"
    TERABITS = "Terabits"
    PERCENT = "Percent"
    COUNT = "Count"
    BYTES_SECOND = "Bytes/Second"
    KILOBYTES_SECOND = "Kilobytes/Second"
    MEGABYTES_SECOND = "Megabytes/Second"
    GIGABYTES_SECOND = "Gigabytes/Second"
    TERABYTES_SECOND = "Terabytes/Second"
    BITS_SECOND = "Bits/Second"
    KILOBITS_SECOND = "Kilobits/Second"
    MEGABITS_SECOND = "Megabits/Second"
    GIGABITS_SECOND = "Gigabits/Second"
    TERABITS_SECOND = "Terabits/Second"
    COUNT_SECOND = "Count/Second"
    NONE = "None"


@dataclass_json
@dataclass
class CreateFleetMetricRequestBody:
    aggregation_field: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationField' }})
    aggregation_type: CreateFleetMetricRequestBodyAggregationType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexName' }})
    period: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    query_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryString' }})
    query_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryVersion' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    unit: Optional[CreateFleetMetricRequestBodyUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    

@dataclass
class CreateFleetMetricRequest:
    path_params: CreateFleetMetricPathParams = field(default=None)
    headers: CreateFleetMetricHeaders = field(default=None)
    request: CreateFleetMetricRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFleetMetricResponse:
    content_type: str = field(default=None)
    create_fleet_metric_response: Optional[shared.CreateFleetMetricResponse] = field(default=None)
    index_not_ready_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_aggregation_exception: Optional[Any] = field(default=None)
    invalid_query_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
