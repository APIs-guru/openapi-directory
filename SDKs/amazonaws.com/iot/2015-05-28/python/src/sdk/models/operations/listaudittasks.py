from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ListAuditTasksTaskStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    CANCELED = "CANCELED"

class ListAuditTasksTaskTypeEnum(str, Enum):
    ON_DEMAND_AUDIT_TASK = "ON_DEMAND_AUDIT_TASK"
    SCHEDULED_AUDIT_TASK = "SCHEDULED_AUDIT_TASK"


@dataclass
class ListAuditTasksQueryParams:
    end_time: datetime = field(metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    start_time: datetime = field(metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    task_status: Optional[ListAuditTasksTaskStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'taskStatus', 'style': 'form', 'explode': True }})
    task_type: Optional[ListAuditTasksTaskTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'taskType', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAuditTasksHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAuditTasksRequest:
    headers: ListAuditTasksHeaders = field()
    query_params: ListAuditTasksQueryParams = field()
    

@dataclass
class ListAuditTasksResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_audit_tasks_response: Optional[shared.ListAuditTasksResponse] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
