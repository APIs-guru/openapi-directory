from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateJobActionEnum(str, Enum):
    CREATE_JOB = "CreateJob"

class GetCreateJobJobTypeEnum(str, Enum):
    IMPORT = "Import"
    EXPORT = "Export"

class GetCreateJobOperationEnum(str, Enum):
    CREATE_JOB = "CreateJob"

class GetCreateJobVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_06_01 = "2010-06-01"


@dataclass
class GetCreateJobQueryParams:
    aws_access_key_id: str = field(metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: GetCreateJobActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    job_type: GetCreateJobJobTypeEnum = field(metadata={'query_param': { 'field_name': 'JobType', 'style': 'form', 'explode': True }})
    manifest: str = field(metadata={'query_param': { 'field_name': 'Manifest', 'style': 'form', 'explode': True }})
    operation: GetCreateJobOperationEnum = field(metadata={'query_param': { 'field_name': 'Operation', 'style': 'form', 'explode': True }})
    signature: str = field(metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = field(metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = field(metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = field(metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    validate_only: bool = field(metadata={'query_param': { 'field_name': 'ValidateOnly', 'style': 'form', 'explode': True }})
    version: GetCreateJobVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    api_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'APIVersion', 'style': 'form', 'explode': True }})
    manifest_addendum: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ManifestAddendum', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateJobRequest:
    query_params: GetCreateJobQueryParams = field()
    

@dataclass
class GetCreateJobResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
