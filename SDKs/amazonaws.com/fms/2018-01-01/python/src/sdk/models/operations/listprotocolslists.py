from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListProtocolsListsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListProtocolsListsXAmzTargetEnum(str, Enum):
    AWSFMS_20180101_LIST_PROTOCOLS_LISTS = "AWSFMS_20180101.ListProtocolsLists"


@dataclass
class ListProtocolsListsHeaders:
    x_amz_target: ListProtocolsListsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListProtocolsListsRequest:
    headers: ListProtocolsListsHeaders = field()
    query_params: ListProtocolsListsQueryParams = field()
    request: shared.ListProtocolsListsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListProtocolsListsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_operation_exception: Optional[Any] = field(default=None)
    list_protocols_lists_response: Optional[shared.ListProtocolsListsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
