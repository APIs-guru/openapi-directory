from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ApplyPendingMaintenanceActionXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_APPLY_PENDING_MAINTENANCE_ACTION = "AmazonDMSv20160101.ApplyPendingMaintenanceAction"


@dataclass
class ApplyPendingMaintenanceActionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ApplyPendingMaintenanceActionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplyPendingMaintenanceActionRequest:
    headers: ApplyPendingMaintenanceActionHeaders = field(default=None)
    request: shared.ApplyPendingMaintenanceActionMessage = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ApplyPendingMaintenanceActionResponse:
    apply_pending_maintenance_action_response: Optional[shared.ApplyPendingMaintenanceActionResponse] = field(default=None)
    content_type: str = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
