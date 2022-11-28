from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetRequestEnvironmentInfoActionEnum(str, Enum):
    REQUEST_ENVIRONMENT_INFO = "RequestEnvironmentInfo"

class GetRequestEnvironmentInfoInfoTypeEnum(str, Enum):
    TAIL = "tail"
    BUNDLE = "bundle"

class GetRequestEnvironmentInfoVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetRequestEnvironmentInfoQueryParams:
    action: GetRequestEnvironmentInfoActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    info_type: GetRequestEnvironmentInfoInfoTypeEnum = field(metadata={'query_param': { 'field_name': 'InfoType', 'style': 'form', 'explode': True }})
    version: GetRequestEnvironmentInfoVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    environment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EnvironmentId', 'style': 'form', 'explode': True }})
    environment_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EnvironmentName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRequestEnvironmentInfoHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRequestEnvironmentInfoRequest:
    headers: GetRequestEnvironmentInfoHeaders = field()
    query_params: GetRequestEnvironmentInfoQueryParams = field()
    

@dataclass
class GetRequestEnvironmentInfoResponse:
    content_type: str = field()
    status_code: int = field()
    
