from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetFunction20200531PathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'Name', 'style': 'simple', 'explode': False }})
    
class GetFunction20200531StageEnum(str, Enum):
    DEVELOPMENT = "DEVELOPMENT"
    LIVE = "LIVE"


@dataclass
class GetFunction20200531QueryParams:
    stage: Optional[GetFunction20200531StageEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Stage', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFunction20200531Headers:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFunction20200531Request:
    path_params: GetFunction20200531PathParams = field(default=None)
    query_params: GetFunction20200531QueryParams = field(default=None)
    headers: GetFunction20200531Headers = field(default=None)
    

@dataclass
class GetFunction20200531Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
