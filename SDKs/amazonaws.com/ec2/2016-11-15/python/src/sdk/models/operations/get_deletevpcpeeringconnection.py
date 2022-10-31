from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteVpcPeeringConnectionActionEnum(str, Enum):
    DELETE_VPC_PEERING_CONNECTION = "DeleteVpcPeeringConnection"

class GetDeleteVpcPeeringConnectionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDeleteVpcPeeringConnectionQueryParams:
    action: GetDeleteVpcPeeringConnectionActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    version: GetDeleteVpcPeeringConnectionVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_peering_connection_id: str = field(default=None, metadata={'query_param': { 'field_name': 'VpcPeeringConnectionId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteVpcPeeringConnectionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteVpcPeeringConnectionRequest:
    query_params: GetDeleteVpcPeeringConnectionQueryParams = field(default=None)
    headers: GetDeleteVpcPeeringConnectionHeaders = field(default=None)
    

@dataclass
class GetDeleteVpcPeeringConnectionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
