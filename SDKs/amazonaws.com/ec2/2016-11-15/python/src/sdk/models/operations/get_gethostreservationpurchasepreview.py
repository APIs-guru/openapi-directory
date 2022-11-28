from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetGetHostReservationPurchasePreviewActionEnum(str, Enum):
    GET_HOST_RESERVATION_PURCHASE_PREVIEW = "GetHostReservationPurchasePreview"

class GetGetHostReservationPurchasePreviewVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetGetHostReservationPurchasePreviewQueryParams:
    action: GetGetHostReservationPurchasePreviewActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    host_id_set: List[str] = field(metadata={'query_param': { 'field_name': 'HostIdSet', 'style': 'form', 'explode': True }})
    offering_id: str = field(metadata={'query_param': { 'field_name': 'OfferingId', 'style': 'form', 'explode': True }})
    version: GetGetHostReservationPurchasePreviewVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetHostReservationPurchasePreviewHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGetHostReservationPurchasePreviewRequest:
    headers: GetGetHostReservationPurchasePreviewHeaders = field()
    query_params: GetGetHostReservationPurchasePreviewQueryParams = field()
    

@dataclass
class GetGetHostReservationPurchasePreviewResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
