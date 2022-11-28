from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ListAuditMitigationActionsTasksTaskStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    CANCELED = "CANCELED"


@dataclass
class ListAuditMitigationActionsTasksQueryParams:
    end_time: datetime = field(metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    start_time: datetime = field(metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    audit_task_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'auditTaskId', 'style': 'form', 'explode': True }})
    finding_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'findingId', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    task_status: Optional[ListAuditMitigationActionsTasksTaskStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'taskStatus', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAuditMitigationActionsTasksHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAuditMitigationActionsTasksRequest:
    headers: ListAuditMitigationActionsTasksHeaders = field()
    query_params: ListAuditMitigationActionsTasksQueryParams = field()
    

@dataclass
class ListAuditMitigationActionsTasksResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_audit_mitigation_actions_tasks_response: Optional[shared.ListAuditMitigationActionsTasksResponse] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
