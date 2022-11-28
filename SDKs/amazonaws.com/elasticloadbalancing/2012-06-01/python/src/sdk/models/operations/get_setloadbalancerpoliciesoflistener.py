from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetSetLoadBalancerPoliciesOfListenerActionEnum(str, Enum):
    SET_LOAD_BALANCER_POLICIES_OF_LISTENER = "SetLoadBalancerPoliciesOfListener"

class GetSetLoadBalancerPoliciesOfListenerVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_06_01 = "2012-06-01"


@dataclass
class GetSetLoadBalancerPoliciesOfListenerQueryParams:
    action: GetSetLoadBalancerPoliciesOfListenerActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    load_balancer_name: str = field(metadata={'query_param': { 'field_name': 'LoadBalancerName', 'style': 'form', 'explode': True }})
    load_balancer_port: int = field(metadata={'query_param': { 'field_name': 'LoadBalancerPort', 'style': 'form', 'explode': True }})
    policy_names: List[str] = field(metadata={'query_param': { 'field_name': 'PolicyNames', 'style': 'form', 'explode': True }})
    version: GetSetLoadBalancerPoliciesOfListenerVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetLoadBalancerPoliciesOfListenerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetLoadBalancerPoliciesOfListenerRequest:
    headers: GetSetLoadBalancerPoliciesOfListenerHeaders = field()
    query_params: GetSetLoadBalancerPoliciesOfListenerQueryParams = field()
    

@dataclass
class GetSetLoadBalancerPoliciesOfListenerResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
