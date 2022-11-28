from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetUpdateJobActionEnum(str, Enum):
    UPDATE_JOB = "UpdateJob"

class GetUpdateJobJobTypeEnum(str, Enum):
    IMPORT = "Import"
    EXPORT = "Export"

class GetUpdateJobOperationEnum(str, Enum):
    UPDATE_JOB = "UpdateJob"

class GetUpdateJobVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_06_01 = "2010-06-01"


@dataclass
class GetUpdateJobQueryParams:
    aws_access_key_id: str = field(metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: GetUpdateJobActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    job_id: str = field(metadata={'query_param': { 'field_name': 'JobId', 'style': 'form', 'explode': True }})
    job_type: GetUpdateJobJobTypeEnum = field(metadata={'query_param': { 'field_name': 'JobType', 'style': 'form', 'explode': True }})
    manifest: str = field(metadata={'query_param': { 'field_name': 'Manifest', 'style': 'form', 'explode': True }})
    operation: GetUpdateJobOperationEnum = field(metadata={'query_param': { 'field_name': 'Operation', 'style': 'form', 'explode': True }})
    signature: str = field(metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = field(metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = field(metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = field(metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    validate_only: bool = field(metadata={'query_param': { 'field_name': 'ValidateOnly', 'style': 'form', 'explode': True }})
    version: GetUpdateJobVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    api_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'APIVersion', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateJobRequest:
    query_params: GetUpdateJobQueryParams = field()
    

@dataclass
class GetUpdateJobResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
