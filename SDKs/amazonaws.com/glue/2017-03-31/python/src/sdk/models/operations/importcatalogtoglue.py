from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ImportCatalogToGlueXAmzTargetEnum(str, Enum):
    AWS_GLUE_IMPORT_CATALOG_TO_GLUE = "AWSGlue.ImportCatalogToGlue"


@dataclass
class ImportCatalogToGlueHeaders:
    x_amz_target: ImportCatalogToGlueXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImportCatalogToGlueRequest:
    headers: ImportCatalogToGlueHeaders = field()
    request: shared.ImportCatalogToGlueRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ImportCatalogToGlueResponse:
    content_type: str = field()
    status_code: int = field()
    import_catalog_to_glue_response: Optional[dict[str, Any]] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    operation_timeout_exception: Optional[Any] = field(default=None)
    
