from dataclasses import dataclass, field
from typing import Enum,Optional

class GetAssociateTrunkInterfaceActionEnum(str, Enum):
    ASSOCIATE_TRUNK_INTERFACE = "AssociateTrunkInterface"

class GetAssociateTrunkInterfaceVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetAssociateTrunkInterfaceQueryParams:
    action: GetAssociateTrunkInterfaceActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    branch_interface_id: str = field(default=None, metadata={'query_param': { 'field_name': 'BranchInterfaceId', 'style': 'form', 'explode': True }})
    client_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClientToken', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    gre_key: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'GreKey', 'style': 'form', 'explode': True }})
    trunk_interface_id: str = field(default=None, metadata={'query_param': { 'field_name': 'TrunkInterfaceId', 'style': 'form', 'explode': True }})
    version: GetAssociateTrunkInterfaceVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vlan_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'VlanId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAssociateTrunkInterfaceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetAssociateTrunkInterfaceRequest:
    query_params: GetAssociateTrunkInterfaceQueryParams = field(default=None)
    headers: GetAssociateTrunkInterfaceHeaders = field(default=None)
    

@dataclass
class GetAssociateTrunkInterfaceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
