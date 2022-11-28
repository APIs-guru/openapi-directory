from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetDescribeEnvironmentHealthActionEnum(str, Enum):
    DESCRIBE_ENVIRONMENT_HEALTH = "DescribeEnvironmentHealth"

class GetDescribeEnvironmentHealthVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetDescribeEnvironmentHealthQueryParams:
    action: GetDescribeEnvironmentHealthActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeEnvironmentHealthVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    attribute_names: Optional[List[shared.EnvironmentHealthAttributeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'AttributeNames', 'style': 'form', 'explode': True }})
    environment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EnvironmentId', 'style': 'form', 'explode': True }})
    environment_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EnvironmentName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeEnvironmentHealthHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeEnvironmentHealthRequest:
    headers: GetDescribeEnvironmentHealthHeaders = field()
    query_params: GetDescribeEnvironmentHealthQueryParams = field()
    

@dataclass
class GetDescribeEnvironmentHealthResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
