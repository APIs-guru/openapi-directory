from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutEvaluationsXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_EVALUATIONS = "StarlingDoveService.PutEvaluations"


@dataclass
class PutEvaluationsHeaders:
    x_amz_target: PutEvaluationsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutEvaluationsRequest:
    headers: PutEvaluationsHeaders = field()
    request: shared.PutEvaluationsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutEvaluationsResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    invalid_result_token_exception: Optional[Any] = field(default=None)
    no_such_config_rule_exception: Optional[Any] = field(default=None)
    put_evaluations_response: Optional[shared.PutEvaluationsResponse] = field(default=None)
    
