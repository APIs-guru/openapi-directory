from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetAssociateAddressActionEnum(str, Enum):
    ASSOCIATE_ADDRESS = "AssociateAddress"

class GetAssociateAddressVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetAssociateAddressQueryParams:
    action: GetAssociateAddressActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetAssociateAddressVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    allocation_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AllocationId', 'style': 'form', 'explode': True }})
    allow_reassociation: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AllowReassociation', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    instance_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    network_interface_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NetworkInterfaceId', 'style': 'form', 'explode': True }})
    private_ip_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PrivateIpAddress', 'style': 'form', 'explode': True }})
    public_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PublicIp', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAssociateAddressHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssociateAddressRequest:
    headers: GetAssociateAddressHeaders = field()
    query_params: GetAssociateAddressQueryParams = field()
    

@dataclass
class GetAssociateAddressResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
