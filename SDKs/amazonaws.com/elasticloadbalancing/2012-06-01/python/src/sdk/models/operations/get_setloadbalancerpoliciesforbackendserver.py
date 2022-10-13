from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetSetLoadBalancerPoliciesForBackendServerActionEnum(str, Enum):
    SET_LOAD_BALANCER_POLICIES_FOR_BACKEND_SERVER = "SetLoadBalancerPoliciesForBackendServer"

class GetSetLoadBalancerPoliciesForBackendServerVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_06_01 = "2012-06-01"


@dataclass
class GetSetLoadBalancerPoliciesForBackendServerQueryParams:
    action: GetSetLoadBalancerPoliciesForBackendServerActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    instance_port: int = field(default=None, metadata={'query_param': { 'field_name': 'InstancePort', 'style': 'form', 'explode': True }})
    load_balancer_name: str = field(default=None, metadata={'query_param': { 'field_name': 'LoadBalancerName', 'style': 'form', 'explode': True }})
    policy_names: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'PolicyNames', 'style': 'form', 'explode': True }})
    version: GetSetLoadBalancerPoliciesForBackendServerVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetLoadBalancerPoliciesForBackendServerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetSetLoadBalancerPoliciesForBackendServerRequest:
    query_params: GetSetLoadBalancerPoliciesForBackendServerQueryParams = field(default=None)
    headers: GetSetLoadBalancerPoliciesForBackendServerHeaders = field(default=None)
    

@dataclass
class GetSetLoadBalancerPoliciesForBackendServerResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
