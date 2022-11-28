from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListTagsForResourceQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListTagsForResourceXAmzTargetEnum(str, Enum):
    AWS_SIMBA_API_SERVICE_V20180301_LIST_TAGS_FOR_RESOURCE = "AWSSimbaAPIService_v20180301.ListTagsForResource"


@dataclass
class ListTagsForResourceHeaders:
    x_amz_target: ListTagsForResourceXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTagsForResourceRequest:
    headers: ListTagsForResourceHeaders = field()
    query_params: ListTagsForResourceQueryParams = field()
    request: shared.ListTagsForResourceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListTagsForResourceResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    list_tags_for_resource_response: Optional[shared.ListTagsForResourceResponse] = field(default=None)
    not_service_resource_error: Optional[Any] = field(default=None)
    resource_does_not_support_tagging: Optional[Any] = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    
