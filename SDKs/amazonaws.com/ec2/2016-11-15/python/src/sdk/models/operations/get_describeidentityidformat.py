from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDescribeIdentityIDFormatActionEnum(str, Enum):
    DESCRIBE_IDENTITY_ID_FORMAT = "DescribeIdentityIdFormat"

class GetDescribeIdentityIDFormatVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDescribeIdentityIDFormatQueryParams:
    action: GetDescribeIdentityIDFormatActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    principal_arn: str = field(metadata={'query_param': { 'field_name': 'PrincipalArn', 'style': 'form', 'explode': True }})
    version: GetDescribeIdentityIDFormatVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    resource: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Resource', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeIdentityIDFormatHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeIdentityIDFormatRequest:
    headers: GetDescribeIdentityIDFormatHeaders = field()
    query_params: GetDescribeIdentityIDFormatQueryParams = field()
    

@dataclass
class GetDescribeIdentityIDFormatResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
