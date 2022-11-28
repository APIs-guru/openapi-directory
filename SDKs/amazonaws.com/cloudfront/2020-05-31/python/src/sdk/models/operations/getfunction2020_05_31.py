from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum


@dataclass
class GetFunction20200531PathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'Name', 'style': 'simple', 'explode': False }})
    
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
    headers: GetFunction20200531Headers = field()
    path_params: GetFunction20200531PathParams = field()
    query_params: GetFunction20200531QueryParams = field()
    

@dataclass
class GetFunction20200531Response:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
