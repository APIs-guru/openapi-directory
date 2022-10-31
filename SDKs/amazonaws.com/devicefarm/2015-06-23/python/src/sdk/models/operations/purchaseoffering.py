from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PurchaseOfferingXAmzTargetEnum(str, Enum):
    DEVICE_FARM_20150623_PURCHASE_OFFERING = "DeviceFarm_20150623.PurchaseOffering"


@dataclass
class PurchaseOfferingHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: PurchaseOfferingXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class PurchaseOfferingRequest:
    headers: PurchaseOfferingHeaders = field(default=None)
    request: shared.PurchaseOfferingRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PurchaseOfferingResponse:
    argument_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_eligible_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    purchase_offering_result: Optional[shared.PurchaseOfferingResult] = field(default=None)
    service_account_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
