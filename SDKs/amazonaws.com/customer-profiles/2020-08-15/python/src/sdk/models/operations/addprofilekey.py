from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddProfileKeyPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'DomainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddProfileKeyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddProfileKeyRequestBody:
    key_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyName') }})
    profile_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfileId') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    

@dataclass
class AddProfileKeyRequest:
    headers: AddProfileKeyHeaders = field()
    path_params: AddProfileKeyPathParams = field()
    request: AddProfileKeyRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddProfileKeyResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    add_profile_key_response: Optional[shared.AddProfileKeyResponse] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
