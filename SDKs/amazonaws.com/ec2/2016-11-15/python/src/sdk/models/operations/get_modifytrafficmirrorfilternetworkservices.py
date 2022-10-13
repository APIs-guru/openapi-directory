from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetModifyTrafficMirrorFilterNetworkServicesActionEnum(str, Enum):
    MODIFY_TRAFFIC_MIRROR_FILTER_NETWORK_SERVICES = "ModifyTrafficMirrorFilterNetworkServices"

class GetModifyTrafficMirrorFilterNetworkServicesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyTrafficMirrorFilterNetworkServicesQueryParams:
    action: GetModifyTrafficMirrorFilterNetworkServicesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    add_network_service: Optional[List[shared.TrafficMirrorNetworkServiceEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'AddNetworkService', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    remove_network_service: Optional[List[shared.TrafficMirrorNetworkServiceEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'RemoveNetworkService', 'style': 'form', 'explode': True }})
    traffic_mirror_filter_id: str = field(default=None, metadata={'query_param': { 'field_name': 'TrafficMirrorFilterId', 'style': 'form', 'explode': True }})
    version: GetModifyTrafficMirrorFilterNetworkServicesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyTrafficMirrorFilterNetworkServicesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyTrafficMirrorFilterNetworkServicesRequest:
    query_params: GetModifyTrafficMirrorFilterNetworkServicesQueryParams = field(default=None)
    headers: GetModifyTrafficMirrorFilterNetworkServicesHeaders = field(default=None)
    

@dataclass
class GetModifyTrafficMirrorFilterNetworkServicesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
