from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListTaskDefinitionsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListTaskDefinitionsXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_SERVICE_V20141113_LIST_TASK_DEFINITIONS = "AmazonEC2ContainerServiceV20141113.ListTaskDefinitions"


@dataclass
class ListTaskDefinitionsHeaders:
    x_amz_target: ListTaskDefinitionsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTaskDefinitionsRequest:
    headers: ListTaskDefinitionsHeaders = field()
    query_params: ListTaskDefinitionsQueryParams = field()
    request: shared.ListTaskDefinitionsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListTaskDefinitionsResponse:
    content_type: str = field()
    status_code: int = field()
    client_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    list_task_definitions_response: Optional[shared.ListTaskDefinitionsResponse] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    
