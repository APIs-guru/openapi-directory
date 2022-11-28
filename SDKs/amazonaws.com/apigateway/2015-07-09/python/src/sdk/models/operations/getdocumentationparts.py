from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetDocumentationPartsPathParams:
    restapi_id: str = field(metadata={'path_param': { 'field_name': 'restapi_id', 'style': 'simple', 'explode': False }})
    
class GetDocumentationPartsLocationStatusEnum(str, Enum):
    DOCUMENTED = "DOCUMENTED"
    UNDOCUMENTED = "UNDOCUMENTED"

class GetDocumentationPartsTypeEnum(str, Enum):
    API = "API"
    AUTHORIZER = "AUTHORIZER"
    MODEL = "MODEL"
    RESOURCE = "RESOURCE"
    METHOD = "METHOD"
    PATH_PARAMETER = "PATH_PARAMETER"
    QUERY_PARAMETER = "QUERY_PARAMETER"
    REQUEST_HEADER = "REQUEST_HEADER"
    REQUEST_BODY = "REQUEST_BODY"
    RESPONSE = "RESPONSE"
    RESPONSE_HEADER = "RESPONSE_HEADER"
    RESPONSE_BODY = "RESPONSE_BODY"


@dataclass
class GetDocumentationPartsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_status: Optional[GetDocumentationPartsLocationStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'locationStatus', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    path: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    position: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    type: Optional[GetDocumentationPartsTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDocumentationPartsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDocumentationPartsRequest:
    headers: GetDocumentationPartsHeaders = field()
    path_params: GetDocumentationPartsPathParams = field()
    query_params: GetDocumentationPartsQueryParams = field()
    

@dataclass
class GetDocumentationPartsResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    documentation_parts: Optional[shared.DocumentationParts] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
