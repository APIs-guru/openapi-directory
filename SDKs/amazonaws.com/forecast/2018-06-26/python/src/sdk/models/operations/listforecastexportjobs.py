from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListForecastExportJobsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListForecastExportJobsXAmzTargetEnum(str, Enum):
    AMAZON_FORECAST_LIST_FORECAST_EXPORT_JOBS = "AmazonForecast.ListForecastExportJobs"


@dataclass
class ListForecastExportJobsHeaders:
    x_amz_target: ListForecastExportJobsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListForecastExportJobsRequest:
    headers: ListForecastExportJobsHeaders = field()
    query_params: ListForecastExportJobsQueryParams = field()
    request: shared.ListForecastExportJobsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListForecastExportJobsResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input_exception: Optional[Any] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    list_forecast_export_jobs_response: Optional[shared.ListForecastExportJobsResponse] = field(default=None)
    
