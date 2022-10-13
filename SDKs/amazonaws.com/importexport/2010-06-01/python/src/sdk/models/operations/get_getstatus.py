from dataclasses import dataclass, field
from typing import Enum,Optional

class GetGetStatusActionEnum(str, Enum):
    GET_STATUS = "GetStatus"

class GetGetStatusOperationEnum(str, Enum):
    GET_STATUS = "GetStatus"

class GetGetStatusVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_06_01 = "2010-06-01"


@dataclass
class GetGetStatusQueryParams:
    api_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'APIVersion', 'style': 'form', 'explode': True }})
    aws_access_key_id: str = field(default=None, metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: GetGetStatusActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    job_id: str = field(default=None, metadata={'query_param': { 'field_name': 'JobId', 'style': 'form', 'explode': True }})
    operation: GetGetStatusOperationEnum = field(default=None, metadata={'query_param': { 'field_name': 'Operation', 'style': 'form', 'explode': True }})
    signature: str = field(default=None, metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = field(default=None, metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = field(default=None, metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    version: GetGetStatusVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetStatusRequest:
    query_params: GetGetStatusQueryParams = field(default=None)
    

@dataclass
class GetGetStatusResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
