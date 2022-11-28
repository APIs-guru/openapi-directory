from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ListProfileObjectsPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'DomainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListProfileObjectsQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max-results', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'next-token', 'style': 'form', 'explode': True }})
    

@dataclass
class ListProfileObjectsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ListProfileObjectsRequestBodyObjectFilter:
    r"""ListProfileObjectsRequestBodyObjectFilter
    The filter applied to ListProfileObjects response to include profile objects with the specified index values. This filter is only supported for ObjectTypeName _asset and _case.
    """
    
    key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyName') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    

@dataclass_json
@dataclass
class ListProfileObjectsRequestBody:
    object_type_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectTypeName') }})
    profile_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfileId') }})
    object_filter: Optional[ListProfileObjectsRequestBodyObjectFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectFilter') }})
    

@dataclass
class ListProfileObjectsRequest:
    headers: ListProfileObjectsHeaders = field()
    path_params: ListProfileObjectsPathParams = field()
    query_params: ListProfileObjectsQueryParams = field()
    request: ListProfileObjectsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListProfileObjectsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_profile_objects_response: Optional[shared.ListProfileObjectsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
