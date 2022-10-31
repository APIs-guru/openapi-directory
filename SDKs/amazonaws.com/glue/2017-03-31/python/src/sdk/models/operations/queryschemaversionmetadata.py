from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class QuerySchemaVersionMetadataXAmzTargetEnum(str, Enum):
    AWS_GLUE_QUERY_SCHEMA_VERSION_METADATA = "AWSGlue.QuerySchemaVersionMetadata"


@dataclass
class QuerySchemaVersionMetadataHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: QuerySchemaVersionMetadataXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class QuerySchemaVersionMetadataRequest:
    headers: QuerySchemaVersionMetadataHeaders = field(default=None)
    request: shared.QuerySchemaVersionMetadataInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class QuerySchemaVersionMetadataResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    entity_not_found_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    query_schema_version_metadata_response: Optional[shared.QuerySchemaVersionMetadataResponse] = field(default=None)
    status_code: int = field(default=None)
    
