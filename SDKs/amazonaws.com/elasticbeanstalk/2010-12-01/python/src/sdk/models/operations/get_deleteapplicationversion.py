from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteApplicationVersionActionEnum(str, Enum):
    DELETE_APPLICATION_VERSION = "DeleteApplicationVersion"

class GetDeleteApplicationVersionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetDeleteApplicationVersionQueryParams:
    action: GetDeleteApplicationVersionActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    application_name: str = field(default=None, metadata={'query_param': { 'field_name': 'ApplicationName', 'style': 'form', 'explode': True }})
    delete_source_bundle: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DeleteSourceBundle', 'style': 'form', 'explode': True }})
    version: GetDeleteApplicationVersionVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    version_label: str = field(default=None, metadata={'query_param': { 'field_name': 'VersionLabel', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteApplicationVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteApplicationVersionRequest:
    query_params: GetDeleteApplicationVersionQueryParams = field(default=None)
    headers: GetDeleteApplicationVersionHeaders = field(default=None)
    

@dataclass
class GetDeleteApplicationVersionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
