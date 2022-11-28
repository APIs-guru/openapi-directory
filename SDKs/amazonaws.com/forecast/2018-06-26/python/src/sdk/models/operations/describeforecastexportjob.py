from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeForecastExportJobXAmzTargetEnum(str, Enum):
    AMAZON_FORECAST_DESCRIBE_FORECAST_EXPORT_JOB = "AmazonForecast.DescribeForecastExportJob"


@dataclass
class DescribeForecastExportJobHeaders:
    x_amz_target: DescribeForecastExportJobXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeForecastExportJobRequest:
    headers: DescribeForecastExportJobHeaders = field()
    request: shared.DescribeForecastExportJobRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeForecastExportJobResponse:
    content_type: str = field()
    status_code: int = field()
    describe_forecast_export_job_response: Optional[shared.DescribeForecastExportJobResponse] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
