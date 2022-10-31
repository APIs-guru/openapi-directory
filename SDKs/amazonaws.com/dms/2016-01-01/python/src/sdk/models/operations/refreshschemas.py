from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RefreshSchemasXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_REFRESH_SCHEMAS = "AmazonDMSv20160101.RefreshSchemas"


@dataclass
class RefreshSchemasHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: RefreshSchemasXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class RefreshSchemasRequest:
    headers: RefreshSchemasHeaders = field(default=None)
    request: shared.RefreshSchemasMessage = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RefreshSchemasResponse:
    content_type: str = field(default=None)
    invalid_resource_state_fault: Optional[Any] = field(default=None)
    kms_key_not_accessible_fault: Optional[Any] = field(default=None)
    refresh_schemas_response: Optional[shared.RefreshSchemasResponse] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    resource_quota_exceeded_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
