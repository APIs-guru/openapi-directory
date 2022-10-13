from dataclasses import dataclass, field
from typing import Enum,Optional

class GetRetrieveEnvironmentInfoActionEnum(str, Enum):
    RETRIEVE_ENVIRONMENT_INFO = "RetrieveEnvironmentInfo"

class GetRetrieveEnvironmentInfoInfoTypeEnum(str, Enum):
    TAIL = "tail"
    BUNDLE = "bundle"

class GetRetrieveEnvironmentInfoVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetRetrieveEnvironmentInfoQueryParams:
    action: GetRetrieveEnvironmentInfoActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    environment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EnvironmentId', 'style': 'form', 'explode': True }})
    environment_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EnvironmentName', 'style': 'form', 'explode': True }})
    info_type: GetRetrieveEnvironmentInfoInfoTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'InfoType', 'style': 'form', 'explode': True }})
    version: GetRetrieveEnvironmentInfoVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRetrieveEnvironmentInfoHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetRetrieveEnvironmentInfoRequest:
    query_params: GetRetrieveEnvironmentInfoQueryParams = field(default=None)
    headers: GetRetrieveEnvironmentInfoHeaders = field(default=None)
    

@dataclass
class GetRetrieveEnvironmentInfoResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
