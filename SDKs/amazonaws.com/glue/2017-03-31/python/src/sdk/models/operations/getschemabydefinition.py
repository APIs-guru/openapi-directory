from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetSchemaByDefinitionXAmzTargetEnum(str, Enum):
    AWS_GLUE_GET_SCHEMA_BY_DEFINITION = "AWSGlue.GetSchemaByDefinition"


@dataclass
class GetSchemaByDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetSchemaByDefinitionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

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
    
