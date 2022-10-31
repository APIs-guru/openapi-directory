from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribeCrossAccountAccessRoleXAmzTargetEnum(str, Enum):
    INSPECTOR_SERVICE_DESCRIBE_CROSS_ACCOUNT_ACCESS_ROLE = "InspectorService.DescribeCrossAccountAccessRole"


@dataclass
class DescribeCrossAccountAccessRoleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeCrossAccountAccessRoleXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeCrossAccountAccessRoleRequest:
    headers: DescribeCrossAccountAccessRoleHeaders = field(default=None)
    

@dataclass
class DescribeCrossAccountAccessRoleResponse:
    content_type: str = field(default=None)
    describe_cross_account_access_role_response: Optional[shared.DescribeCrossAccountAccessRoleResponse] = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
