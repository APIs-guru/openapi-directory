from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum

class GetGetShippingLabelActionEnum(str, Enum):
    GET_SHIPPING_LABEL = "GetShippingLabel"

class GetGetShippingLabelOperationEnum(str, Enum):
    GET_SHIPPING_LABEL = "GetShippingLabel"

class GetGetShippingLabelVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_06_01 = "2010-06-01"


@dataclass
class GetGetShippingLabelQueryParams:
    aws_access_key_id: str = field(metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: GetGetShippingLabelActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    operation: GetGetShippingLabelOperationEnum = field(metadata={'query_param': { 'field_name': 'Operation', 'style': 'form', 'explode': True }})
    signature: str = field(metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = field(metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = field(metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = field(metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    version: GetGetShippingLabelVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    job_ids: List[str] = field(metadata={'query_param': { 'field_name': 'jobIds', 'style': 'form', 'explode': True }})
    api_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'APIVersion', 'style': 'form', 'explode': True }})
    city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    company: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'company', 'style': 'form', 'explode': True }})
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    phone_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'phoneNumber', 'style': 'form', 'explode': True }})
    postal_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'postalCode', 'style': 'form', 'explode': True }})
    state_or_province: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'stateOrProvince', 'style': 'form', 'explode': True }})
    street1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'street1', 'style': 'form', 'explode': True }})
    street2: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'street2', 'style': 'form', 'explode': True }})
    street3: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'street3', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetShippingLabelRequest:
    query_params: GetGetShippingLabelQueryParams = field()
    

@dataclass
class GetGetShippingLabelResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
