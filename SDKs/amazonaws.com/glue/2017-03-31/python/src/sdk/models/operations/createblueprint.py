from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateBlueprintXAmzTargetEnum(str, Enum):
    AWS_GLUE_CREATE_BLUEPRINT = "AWSGlue.CreateBlueprint"


@dataclass
class CreateBlueprintHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateBlueprintXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBlueprintRequest:
    headers: CreateBlueprintHeaders = field(default=None)
    request: shared.CreateBlueprintRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateBlueprintResponse:
    already_exists_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_blueprint_response: Optional[shared.CreateBlueprintResponse] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    operation_timeout_exception: Optional[Any] = field(default=None)
    resource_number_limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
