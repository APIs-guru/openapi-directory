from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetDescribeVpcClassicLinkDNSSupportActionEnum(str, Enum):
    DESCRIBE_VPC_CLASSIC_LINK_DNS_SUPPORT = "DescribeVpcClassicLinkDnsSupport"

class GetDescribeVpcClassicLinkDNSSupportVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDescribeVpcClassicLinkDNSSupportQueryParams:
    action: GetDescribeVpcClassicLinkDNSSupportActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeVpcClassicLinkDNSSupportVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    vpc_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'VpcIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeVpcClassicLinkDNSSupportHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeVpcClassicLinkDNSSupportRequest:
    headers: GetDescribeVpcClassicLinkDNSSupportHeaders = field()
    query_params: GetDescribeVpcClassicLinkDNSSupportQueryParams = field()
    

@dataclass
class GetDescribeVpcClassicLinkDNSSupportResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
