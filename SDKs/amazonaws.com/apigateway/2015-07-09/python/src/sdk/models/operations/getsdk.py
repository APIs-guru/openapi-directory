from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSDKPathParams:
    restapi_id: str = field(metadata={'path_param': { 'field_name': 'restapi_id', 'style': 'simple', 'explode': False }})
    sdk_type: str = field(metadata={'path_param': { 'field_name': 'sdk_type', 'style': 'simple', 'explode': False }})
    stage_name: str = field(metadata={'path_param': { 'field_name': 'stage_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSDKQueryParams:
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'query_param': { 'field_name': 'parameters', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSDKHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSDKRequest:
    headers: GetSDKHeaders = field()
    path_params: GetSDKPathParams = field()
    query_params: GetSDKQueryParams = field()
    

@dataclass
class GetSDKResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    sdk_response: Optional[shared.SDKResponse] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
