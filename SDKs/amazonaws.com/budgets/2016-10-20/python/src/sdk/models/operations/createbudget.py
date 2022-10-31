from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateBudgetXAmzTargetEnum(str, Enum):
    AWS_BUDGET_SERVICE_GATEWAY_CREATE_BUDGET = "AWSBudgetServiceGateway.CreateBudget"


@dataclass
class CreateBudgetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateBudgetXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBudgetRequest:
    headers: CreateBudgetHeaders = field(default=None)
    request: shared.CreateBudgetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateBudgetResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_budget_response: Optional[dict[str, Any]] = field(default=None)
    creation_limit_exceeded_exception: Optional[Any] = field(default=None)
    duplicate_record_exception: Optional[Any] = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
