from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetSchemaByDefinitionXAmzTargetEnum(str, Enum):
    AWS_GLUE_GET_SCHEMA_BY_DEFINITION = "AWSGlue.GetSchemaByDefinition"


@dataclass
class GetSchemaByDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetSchemaByDefinitionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSchemaByDefinitionRequest:
    headers: GetSchemaByDefinitionHeaders = field(default=None)
    request: shared.GetSchemaByDefinitionInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetSchemaByDefinitionResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    entity_not_found_exception: Optional[Any] = field(default=None)
    get_schema_by_definition_response: Optional[shared.GetSchemaByDefinitionResponse] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
