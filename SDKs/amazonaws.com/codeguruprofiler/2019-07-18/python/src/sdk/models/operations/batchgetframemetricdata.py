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
class BatchGetFrameMetricDataPathParams:
    profiling_group_name: str = field(metadata={'path_param': { 'field_name': 'profilingGroupName', 'style': 'simple', 'explode': False }})
    
class BatchGetFrameMetricDataTargetResolutionEnum(str, Enum):
    PT5_M = "PT5M"
    PT1_H = "PT1H"
    P1_D = "P1D"


@dataclass
class BatchGetFrameMetricDataQueryParams:
    end_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    period: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    target_resolution: Optional[BatchGetFrameMetricDataTargetResolutionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'targetResolution', 'style': 'form', 'explode': True }})
    

@dataclass
class BatchGetFrameMetricDataHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class BatchGetFrameMetricDataRequestBody:
    frame_metrics: Optional[List[shared.FrameMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameMetrics') }})
    

@dataclass
class BatchGetFrameMetricDataRequest:
    headers: BatchGetFrameMetricDataHeaders = field()
    path_params: BatchGetFrameMetricDataPathParams = field()
    query_params: BatchGetFrameMetricDataQueryParams = field()
    request: BatchGetFrameMetricDataRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchGetFrameMetricDataResponse:
    content_type: str = field()
    status_code: int = field()
    batch_get_frame_metric_data_response: Optional[shared.BatchGetFrameMetricDataResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
