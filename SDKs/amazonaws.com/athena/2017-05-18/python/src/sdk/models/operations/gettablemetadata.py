from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetTableMetadataXAmzTargetEnum(str, Enum):
    AMAZON_ATHENA_GET_TABLE_METADATA = "AmazonAthena.GetTableMetadata"


@dataclass
class GetTableMetadataHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetTableMetadataXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetTableMetadataRequest:
    headers: GetTableMetadataHeaders = field(default=None)
    request: shared.GetTableMetadataInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetTableMetadataResponse:
    content_type: str = field(default=None)
    get_table_metadata_output: Optional[shared.GetTableMetadataOutput] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    metadata_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
