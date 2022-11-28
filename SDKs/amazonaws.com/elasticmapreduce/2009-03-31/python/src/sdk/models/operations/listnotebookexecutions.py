from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListNotebookExecutionsQueryParams:
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    
class ListNotebookExecutionsXAmzTargetEnum(str, Enum):
    ELASTIC_MAP_REDUCE_LIST_NOTEBOOK_EXECUTIONS = "ElasticMapReduce.ListNotebookExecutions"


@dataclass
class ListNotebookExecutionsHeaders:
    x_amz_target: ListNotebookExecutionsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListNotebookExecutionsRequest:
    headers: ListNotebookExecutionsHeaders = field()
    query_params: ListNotebookExecutionsQueryParams = field()
    request: shared.ListNotebookExecutionsInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListNotebookExecutionsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_error: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_notebook_executions_output: Optional[shared.ListNotebookExecutionsOutput] = field(default=None)
    
