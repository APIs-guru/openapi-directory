from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateFleetMetricPathParams:
    metric_name: str = field(metadata={'path_param': { 'field_name': 'metricName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFleetMetricHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateFleetMetricRequestBodyAggregationType:
    r"""UpdateFleetMetricRequestBodyAggregationType
    The type of aggregation queries.
    """
    
    name: Optional[shared.AggregationTypeNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
class UpdateFleetMetricRequestBodyUnitEnum(str, Enum):
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
class UpdateFleetMetricRequestBody:
    index_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexName') }})
    aggregation_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationField') }})
    aggregation_type: Optional[UpdateFleetMetricRequestBodyAggregationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expected_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedVersion') }})
    period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    query_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryString') }})
    query_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryVersion') }})
    unit: Optional[UpdateFleetMetricRequestBodyUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass
class UpdateFleetMetricRequest:
    headers: UpdateFleetMetricHeaders = field()
    path_params: UpdateFleetMetricPathParams = field()
    request: UpdateFleetMetricRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateFleetMetricResponse:
    content_type: str = field()
    status_code: int = field()
    index_not_ready_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_aggregation_exception: Optional[Any] = field(default=None)
    invalid_query_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    version_conflict_exception: Optional[Any] = field(default=None)
    
