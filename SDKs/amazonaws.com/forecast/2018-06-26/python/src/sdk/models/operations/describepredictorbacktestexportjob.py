from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribePredictorBacktestExportJobXAmzTargetEnum(str, Enum):
    AMAZON_FORECAST_DESCRIBE_PREDICTOR_BACKTEST_EXPORT_JOB = "AmazonForecast.DescribePredictorBacktestExportJob"


@dataclass
class DescribePredictorBacktestExportJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribePredictorBacktestExportJobXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribePredictorBacktestExportJobRequest:
    headers: DescribePredictorBacktestExportJobHeaders = field(default=None)
    request: shared.DescribePredictorBacktestExportJobRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribePredictorBacktestExportJobResponse:
    content_type: str = field(default=None)
    describe_predictor_backtest_export_job_response: Optional[shared.DescribePredictorBacktestExportJobResponse] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
