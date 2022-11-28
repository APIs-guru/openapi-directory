from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DescribeBudgetPerformanceHistoryQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeBudgetPerformanceHistoryXAmzTargetEnum(str, Enum):
    AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGET_PERFORMANCE_HISTORY = "AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory"


@dataclass
class DescribeBudgetPerformanceHistoryHeaders:
    x_amz_target: DescribeBudgetPerformanceHistoryXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeBudgetPerformanceHistoryRequest:
    headers: DescribeBudgetPerformanceHistoryHeaders = field()
    query_params: DescribeBudgetPerformanceHistoryQueryParams = field()
    request: shared.DescribeBudgetPerformanceHistoryRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeBudgetPerformanceHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    describe_budget_performance_history_response: Optional[shared.DescribeBudgetPerformanceHistoryResponse] = field(default=None)
    expired_next_token_exception: Optional[Any] = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    
