from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared

class GetPurchaseReservedInstancesOfferingActionEnum(str, Enum):
    PURCHASE_RESERVED_INSTANCES_OFFERING = "PurchaseReservedInstancesOffering"


@dataclass
class GetPurchaseReservedInstancesOfferingLimitPrice:
    amount: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'Amount' }})
    currency_code: Optional[shared.CurrencyCodeValuesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'CurrencyCode' }})
    
class GetPurchaseReservedInstancesOfferingVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetPurchaseReservedInstancesOfferingQueryParams:
    action: GetPurchaseReservedInstancesOfferingActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    instance_count: int = field(default=None, metadata={'query_param': { 'field_name': 'InstanceCount', 'style': 'form', 'explode': True }})
    limit_price: Optional[GetPurchaseReservedInstancesOfferingLimitPrice] = field(default=None, metadata={'query_param': { 'field_name': 'LimitPrice', 'style': 'form', 'explode': True }})
    purchase_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'PurchaseTime', 'style': 'form', 'explode': True }})
    reserved_instances_offering_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ReservedInstancesOfferingId', 'style': 'form', 'explode': True }})
    version: GetPurchaseReservedInstancesOfferingVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPurchaseReservedInstancesOfferingHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetPurchaseReservedInstancesOfferingRequest:
    query_params: GetPurchaseReservedInstancesOfferingQueryParams = field(default=None)
    headers: GetPurchaseReservedInstancesOfferingHeaders = field(default=None)
    

@dataclass
class GetPurchaseReservedInstancesOfferingResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
