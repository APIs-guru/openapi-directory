from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetCatalogImportStatusXAmzTargetEnum(str, Enum):
    AWS_GLUE_GET_CATALOG_IMPORT_STATUS = "AWSGlue.GetCatalogImportStatus"


@dataclass
class GetCatalogImportStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetCatalogImportStatusXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetCatalogImportStatusRequest:
    headers: GetCatalogImportStatusHeaders = field(default=None)
    request: shared.GetCatalogImportStatusRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetCatalogImportStatusResponse:
    content_type: str = field(default=None)
    get_catalog_import_status_response: Optional[shared.GetCatalogImportStatusResponse] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    operation_timeout_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
