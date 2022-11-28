from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGetStatusActionEnum(str, Enum):
    GET_STATUS = "GetStatus"

class GetGetStatusOperationEnum(str, Enum):
    GET_STATUS = "GetStatus"

class GetGetStatusVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_06_01 = "2010-06-01"


@dataclass
class GetGetStatusQueryParams:
    aws_access_key_id: str = field(metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: GetGetStatusActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    job_id: str = field(metadata={'query_param': { 'field_name': 'JobId', 'style': 'form', 'explode': True }})
    operation: GetGetStatusOperationEnum = field(metadata={'query_param': { 'field_name': 'Operation', 'style': 'form', 'explode': True }})
    signature: str = field(metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = field(metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = field(metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = field(metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    version: GetGetStatusVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    api_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'APIVersion', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetStatusRequest:
    query_params: GetGetStatusQueryParams = field()
    

@dataclass
class GetGetStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
