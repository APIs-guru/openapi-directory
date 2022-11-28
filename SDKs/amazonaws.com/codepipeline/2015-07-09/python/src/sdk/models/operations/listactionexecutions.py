from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListActionExecutionsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListActionExecutionsXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_LIST_ACTION_EXECUTIONS = "CodePipeline_20150709.ListActionExecutions"


@dataclass
class ListActionExecutionsHeaders:
    x_amz_target: ListActionExecutionsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListActionExecutionsRequest:
    headers: ListActionExecutionsHeaders = field()
    query_params: ListActionExecutionsQueryParams = field()
    request: shared.ListActionExecutionsInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListActionExecutionsResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_next_token_exception: Optional[Any] = field(default=None)
    list_action_executions_output: Optional[shared.ListActionExecutionsOutput] = field(default=None)
    pipeline_execution_not_found_exception: Optional[Any] = field(default=None)
    pipeline_not_found_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
