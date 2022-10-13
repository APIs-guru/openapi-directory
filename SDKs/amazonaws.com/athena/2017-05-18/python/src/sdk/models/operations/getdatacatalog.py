from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetDataCatalogXAmzTargetEnum(str, Enum):
    AMAZON_ATHENA_GET_DATA_CATALOG = "AmazonAthena.GetDataCatalog"


@dataclass
class GetDataCatalogHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetDataCatalogXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetDataCatalogRequest:
    headers: GetDataCatalogHeaders = field(default=None)
    request: shared.GetDataCatalogInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDataCatalogResponse:
    content_type: str = field(default=None)
    get_data_catalog_output: Optional[shared.GetDataCatalogOutput] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
