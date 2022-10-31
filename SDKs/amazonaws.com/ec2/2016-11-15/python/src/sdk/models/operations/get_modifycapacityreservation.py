from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional

class GetModifyCapacityReservationActionEnum(str, Enum):
    MODIFY_CAPACITY_RESERVATION = "ModifyCapacityReservation"

class GetModifyCapacityReservationEndDateTypeEnum(str, Enum):
    UNLIMITED = "unlimited"
    LIMITED = "limited"

class GetModifyCapacityReservationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyCapacityReservationQueryParams:
    accept: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Accept', 'style': 'form', 'explode': True }})
    action: GetModifyCapacityReservationActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    capacity_reservation_id: str = field(default=None, metadata={'query_param': { 'field_name': 'CapacityReservationId', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    end_date_type: Optional[GetModifyCapacityReservationEndDateTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'EndDateType', 'style': 'form', 'explode': True }})
    instance_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'InstanceCount', 'style': 'form', 'explode': True }})
    version: GetModifyCapacityReservationVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyCapacityReservationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyCapacityReservationRequest:
    query_params: GetModifyCapacityReservationQueryParams = field(default=None)
    headers: GetModifyCapacityReservationHeaders = field(default=None)
    

@dataclass
class GetModifyCapacityReservationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
