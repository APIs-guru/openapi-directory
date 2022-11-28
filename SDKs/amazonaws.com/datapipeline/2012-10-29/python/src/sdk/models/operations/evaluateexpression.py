from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class EvaluateExpressionXAmzTargetEnum(str, Enum):
    DATA_PIPELINE_EVALUATE_EXPRESSION = "DataPipeline.EvaluateExpression"


@dataclass
class EvaluateExpressionHeaders:
    x_amz_target: EvaluateExpressionXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class EvaluateExpressionRequest:
    headers: EvaluateExpressionHeaders = field()
    request: shared.EvaluateExpressionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EvaluateExpressionResponse:
    content_type: str = field()
    status_code: int = field()
    evaluate_expression_output: Optional[shared.EvaluateExpressionOutput] = field(default=None)
    internal_service_error: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    pipeline_deleted_exception: Optional[Any] = field(default=None)
    pipeline_not_found_exception: Optional[Any] = field(default=None)
    task_not_found_exception: Optional[Any] = field(default=None)
    
