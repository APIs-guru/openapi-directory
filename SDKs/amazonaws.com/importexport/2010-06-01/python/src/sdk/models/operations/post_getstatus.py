from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class PostGetStatusActionEnum(str, Enum):
    GET_STATUS = "GetStatus"

class PostGetStatusOperationEnum(str, Enum):
    GET_STATUS = "GetStatus"

class PostGetStatusVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_06_01 = "2010-06-01"


@dataclass
class PostGetStatusQueryParams:
    aws_access_key_id: str = field(metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: PostGetStatusActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    operation: PostGetStatusOperationEnum = field(metadata={'query_param': { 'field_name': 'Operation', 'style': 'form', 'explode': True }})
    signature: str = field(metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = field(metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = field(metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = field(metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    version: PostGetStatusVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostGetStatusRequest:
    query_params: PostGetStatusQueryParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostGetStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
