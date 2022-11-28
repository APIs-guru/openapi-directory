from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateLbCookieStickinessPolicyActionEnum(str, Enum):
    CREATE_LB_COOKIE_STICKINESS_POLICY = "CreateLBCookieStickinessPolicy"

class GetCreateLbCookieStickinessPolicyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_06_01 = "2012-06-01"


@dataclass
class GetCreateLbCookieStickinessPolicyQueryParams:
    action: GetCreateLbCookieStickinessPolicyActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    load_balancer_name: str = field(metadata={'query_param': { 'field_name': 'LoadBalancerName', 'style': 'form', 'explode': True }})
    policy_name: str = field(metadata={'query_param': { 'field_name': 'PolicyName', 'style': 'form', 'explode': True }})
    version: GetCreateLbCookieStickinessPolicyVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    cookie_expiration_period: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'CookieExpirationPeriod', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateLbCookieStickinessPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateLbCookieStickinessPolicyRequest:
    headers: GetCreateLbCookieStickinessPolicyHeaders = field()
    query_params: GetCreateLbCookieStickinessPolicyQueryParams = field()
    

@dataclass
class GetCreateLbCookieStickinessPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
