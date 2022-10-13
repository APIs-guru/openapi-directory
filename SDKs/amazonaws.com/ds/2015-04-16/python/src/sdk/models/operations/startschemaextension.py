from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StartSchemaExtensionXAmzTargetEnum(str, Enum):
    DIRECTORY_SERVICE_20150416_START_SCHEMA_EXTENSION = "DirectoryService_20150416.StartSchemaExtension"


@dataclass
class StartSchemaExtensionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: StartSchemaExtensionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class StartSchemaExtensionRequest:
    headers: StartSchemaExtensionHeaders = field(default=None)
    request: shared.StartSchemaExtensionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartSchemaExtensionResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    directory_unavailable_exception: Optional[Any] = field(default=None)
    entity_does_not_exist_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    snapshot_limit_exceeded_exception: Optional[Any] = field(default=None)
    start_schema_extension_result: Optional[shared.StartSchemaExtensionResult] = field(default=None)
    status_code: int = field(default=None)
    
