from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutSchemaVersionMetadataXAmzTargetEnum(str, Enum):
    AWS_GLUE_PUT_SCHEMA_VERSION_METADATA = "AWSGlue.PutSchemaVersionMetadata"


@dataclass
class PutSchemaVersionMetadataHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: PutSchemaVersionMetadataXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class PutSchemaVersionMetadataRequest:
    headers: PutSchemaVersionMetadataHeaders = field(default=None)
    request: shared.PutSchemaVersionMetadataInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutSchemaVersionMetadataResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    already_exists_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    entity_not_found_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    put_schema_version_metadata_response: Optional[shared.PutSchemaVersionMetadataResponse] = field(default=None)
    resource_number_limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
