from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetTriggersQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetTriggersXAmzTargetEnum(str, Enum):
    AWS_GLUE_GET_TRIGGERS = "AWSGlue.GetTriggers"


@dataclass
class GetTriggersHeaders:
    x_amz_target: GetTriggersXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTriggersRequest:
    headers: GetTriggersHeaders = field()
    query_params: GetTriggersQueryParams = field()
    request: shared.GetTriggersRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetTriggersResponse:
    content_type: str = field()
    status_code: int = field()
    entity_not_found_exception: Optional[Any] = field(default=None)
    get_triggers_response: Optional[shared.GetTriggersResponse] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    operation_timeout_exception: Optional[Any] = field(default=None)
    
