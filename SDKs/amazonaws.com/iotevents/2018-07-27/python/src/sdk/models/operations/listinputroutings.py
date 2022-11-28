from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ListInputRoutingsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ListInputRoutingsRequestBodyInputIdentifier:
    r"""ListInputRoutingsRequestBodyInputIdentifier
     The identifer of the input. 
    """
    
    iot_events_input_identifier: Optional[shared.IotEventsInputIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotEventsInputIdentifier') }})
    iot_site_wise_input_identifier: Optional[shared.IotSiteWiseInputIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotSiteWiseInputIdentifier') }})
    

@dataclass_json
@dataclass
class ListInputRoutingsRequestBody:
    input_identifier: ListInputRoutingsRequestBodyInputIdentifier = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputIdentifier') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

@dataclass
class ListInputRoutingsRequest:
    headers: ListInputRoutingsHeaders = field()
    request: ListInputRoutingsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListInputRoutingsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_input_routings_response: Optional[shared.ListInputRoutingsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
