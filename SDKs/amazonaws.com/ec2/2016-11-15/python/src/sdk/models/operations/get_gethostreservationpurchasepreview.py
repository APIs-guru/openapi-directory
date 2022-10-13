from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetGetHostReservationPurchasePreviewActionEnum(str, Enum):
    GET_HOST_RESERVATION_PURCHASE_PREVIEW = "GetHostReservationPurchasePreview"

class GetGetHostReservationPurchasePreviewVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetGetHostReservationPurchasePreviewQueryParams:
    action: GetGetHostReservationPurchasePreviewActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    host_id_set: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'HostIdSet', 'style': 'form', 'explode': True }})
    offering_id: str = field(default=None, metadata={'query_param': { 'field_name': 'OfferingId', 'style': 'form', 'explode': True }})
    version: GetGetHostReservationPurchasePreviewVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetHostReservationPurchasePreviewHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetGetHostReservationPurchasePreviewRequest:
    query_params: GetGetHostReservationPurchasePreviewQueryParams = field(default=None)
    headers: GetGetHostReservationPurchasePreviewHeaders = field(default=None)
    

@dataclass
class GetGetHostReservationPurchasePreviewResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
