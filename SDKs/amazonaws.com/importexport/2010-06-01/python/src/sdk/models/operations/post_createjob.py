from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class PostCreateJobActionEnum(str, Enum):
    CREATE_JOB = "CreateJob"

class PostCreateJobOperationEnum(str, Enum):
    CREATE_JOB = "CreateJob"

class PostCreateJobVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_06_01 = "2010-06-01"


@dataclass
class PostCreateJobQueryParams:
    aws_access_key_id: str = field(metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: PostCreateJobActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    operation: PostCreateJobOperationEnum = field(metadata={'query_param': { 'field_name': 'Operation', 'style': 'form', 'explode': True }})
    signature: str = field(metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = field(metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = field(metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = field(metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    version: PostCreateJobVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCreateJobRequest:
    query_params: PostCreateJobQueryParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostCreateJobResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
