from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ImportDocumentationPartsPathParams:
    restapi_id: str = field(default=None, metadata={'path_param': { 'field_name': 'restapi_id', 'style': 'simple', 'explode': False }})
    
class ImportDocumentationPartsModeEnum(str, Enum):
    MERGE = "merge"
    OVERWRITE = "overwrite"


@dataclass
class ImportDocumentationPartsQueryParams:
    failonwarnings: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'failonwarnings', 'style': 'form', 'explode': True }})
    mode: Optional[ImportDocumentationPartsModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'mode', 'style': 'form', 'explode': True }})
    

@dataclass
class ImportDocumentationPartsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ImportDocumentationPartsRequestBody:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    

@dataclass
class ImportDocumentationPartsRequest:
    path_params: ImportDocumentationPartsPathParams = field(default=None)
    query_params: ImportDocumentationPartsQueryParams = field(default=None)
    headers: ImportDocumentationPartsHeaders = field(default=None)
    request: ImportDocumentationPartsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ImportDocumentationPartsResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    documentation_part_ids: Optional[shared.DocumentationPartIds] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
