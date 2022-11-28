from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class PostApplySecurityGroupsToLoadBalancerActionEnum(str, Enum):
    APPLY_SECURITY_GROUPS_TO_LOAD_BALANCER = "ApplySecurityGroupsToLoadBalancer"

class PostApplySecurityGroupsToLoadBalancerVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_06_01 = "2012-06-01"


@dataclass
class PostApplySecurityGroupsToLoadBalancerQueryParams:
    action: PostApplySecurityGroupsToLoadBalancerActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: PostApplySecurityGroupsToLoadBalancerVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostApplySecurityGroupsToLoadBalancerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostApplySecurityGroupsToLoadBalancerRequest:
    headers: PostApplySecurityGroupsToLoadBalancerHeaders = field()
    query_params: PostApplySecurityGroupsToLoadBalancerQueryParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostApplySecurityGroupsToLoadBalancerResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
