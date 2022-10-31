from dataclasses import dataclass, field
from typing import Enum,Optional

class GetModifySubnetAttributeActionEnum(str, Enum):
    MODIFY_SUBNET_ATTRIBUTE = "ModifySubnetAttribute"


@dataclass
class GetModifySubnetAttributeAssignIpv6AddressOnCreation:
    value: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Value' }})
    

@dataclass
class GetModifySubnetAttributeMapCustomerOwnedIPOnLaunch:
    value: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Value' }})
    

@dataclass
class GetModifySubnetAttributeMapPublicIPOnLaunch:
    value: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Value' }})
    
class GetModifySubnetAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifySubnetAttributeQueryParams:
    action: GetModifySubnetAttributeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    assign_ipv6_address_on_creation: Optional[GetModifySubnetAttributeAssignIpv6AddressOnCreation] = field(default=None, metadata={'query_param': { 'field_name': 'AssignIpv6AddressOnCreation', 'style': 'form', 'explode': True }})
    customer_owned_ipv4_pool: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CustomerOwnedIpv4Pool', 'style': 'form', 'explode': True }})
    map_customer_owned_ip_on_launch: Optional[GetModifySubnetAttributeMapCustomerOwnedIPOnLaunch] = field(default=None, metadata={'query_param': { 'field_name': 'MapCustomerOwnedIpOnLaunch', 'style': 'form', 'explode': True }})
    map_public_ip_on_launch: Optional[GetModifySubnetAttributeMapPublicIPOnLaunch] = field(default=None, metadata={'query_param': { 'field_name': 'MapPublicIpOnLaunch', 'style': 'form', 'explode': True }})
    subnet_id: str = field(default=None, metadata={'query_param': { 'field_name': 'SubnetId', 'style': 'form', 'explode': True }})
    version: GetModifySubnetAttributeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifySubnetAttributeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifySubnetAttributeRequest:
    query_params: GetModifySubnetAttributeQueryParams = field(default=None)
    headers: GetModifySubnetAttributeHeaders = field(default=None)
    

@dataclass
class GetModifySubnetAttributeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
