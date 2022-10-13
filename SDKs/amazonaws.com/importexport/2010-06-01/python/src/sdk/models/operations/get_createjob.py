from dataclasses import dataclass, field
from typing import Enum,Optional

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
    api_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'APIVersion', 'style': 'form', 'explode': True }})
    aws_access_key_id: str = field(default=None, metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: GetCreateJobActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    job_type: GetCreateJobJobTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'JobType', 'style': 'form', 'explode': True }})
    manifest: str = field(default=None, metadata={'query_param': { 'field_name': 'Manifest', 'style': 'form', 'explode': True }})
    manifest_addendum: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ManifestAddendum', 'style': 'form', 'explode': True }})
    operation: GetCreateJobOperationEnum = field(default=None, metadata={'query_param': { 'field_name': 'Operation', 'style': 'form', 'explode': True }})
    signature: str = field(default=None, metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = field(default=None, metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = field(default=None, metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    validate_only: bool = field(default=None, metadata={'query_param': { 'field_name': 'ValidateOnly', 'style': 'form', 'explode': True }})
    version: GetCreateJobVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateJobRequest:
    query_params: GetCreateJobQueryParams = field(default=None)
    

@dataclass
class GetCreateJobResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
