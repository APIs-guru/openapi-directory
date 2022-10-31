from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions:
    allow_dns_resolution_from_remote_vpc: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AllowDnsResolutionFromRemoteVpc' }})
    allow_egress_from_local_classic_link_to_remote_vpc: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AllowEgressFromLocalClassicLinkToRemoteVpc' }})
    allow_egress_from_local_vpc_to_remote_classic_link: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AllowEgressFromLocalVpcToRemoteClassicLink' }})
    
class GetModifyVpcPeeringConnectionOptionsActionEnum(str, Enum):
    MODIFY_VPC_PEERING_CONNECTION_OPTIONS = "ModifyVpcPeeringConnectionOptions"


@dataclass
class GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions:
    allow_dns_resolution_from_remote_vpc: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AllowDnsResolutionFromRemoteVpc' }})
    allow_egress_from_local_classic_link_to_remote_vpc: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AllowEgressFromLocalClassicLinkToRemoteVpc' }})
    allow_egress_from_local_vpc_to_remote_classic_link: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AllowEgressFromLocalVpcToRemoteClassicLink' }})
    
class GetModifyVpcPeeringConnectionOptionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyVpcPeeringConnectionOptionsQueryParams:
    accepter_peering_connection_options: Optional[GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions] = field(default=None, metadata={'query_param': { 'field_name': 'AccepterPeeringConnectionOptions', 'style': 'form', 'explode': True }})
    action: GetModifyVpcPeeringConnectionOptionsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    requester_peering_connection_options: Optional[GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions] = field(default=None, metadata={'query_param': { 'field_name': 'RequesterPeeringConnectionOptions', 'style': 'form', 'explode': True }})
    version: GetModifyVpcPeeringConnectionOptionsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_peering_connection_id: str = field(default=None, metadata={'query_param': { 'field_name': 'VpcPeeringConnectionId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyVpcPeeringConnectionOptionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyVpcPeeringConnectionOptionsRequest:
    query_params: GetModifyVpcPeeringConnectionOptionsQueryParams = field(default=None)
    headers: GetModifyVpcPeeringConnectionOptionsHeaders = field(default=None)
    

@dataclass
class GetModifyVpcPeeringConnectionOptionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
