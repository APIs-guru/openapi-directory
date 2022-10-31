from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutEvaluationsXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_EVALUATIONS = "StarlingDoveService.PutEvaluations"


@dataclass
class PutEvaluationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: PutEvaluationsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutEvaluationsRequest:
    headers: PutEvaluationsHeaders = field(default=None)
    request: shared.PutEvaluationsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutEvaluationsResponse:
    content_type: str = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    invalid_result_token_exception: Optional[Any] = field(default=None)
    no_such_config_rule_exception: Optional[Any] = field(default=None)
    put_evaluations_response: Optional[shared.PutEvaluationsResponse] = field(default=None)
    status_code: int = field(default=None)
    
