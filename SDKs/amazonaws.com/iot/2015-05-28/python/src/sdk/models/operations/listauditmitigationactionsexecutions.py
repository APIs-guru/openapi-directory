from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListAuditMitigationActionsExecutionsActionStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    CANCELED = "CANCELED"
    SKIPPED = "SKIPPED"
    PENDING = "PENDING"


@dataclass
class ListAuditMitigationActionsExecutionsQueryParams:
    action_status: Optional[ListAuditMitigationActionsExecutionsActionStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'actionStatus', 'style': 'form', 'explode': True }})
    finding_id: str = field(default=None, metadata={'query_param': { 'field_name': 'findingId', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    task_id: str = field(default=None, metadata={'query_param': { 'field_name': 'taskId', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAuditMitigationActionsExecutionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAuditMitigationActionsExecutionsRequest:
    query_params: ListAuditMitigationActionsExecutionsQueryParams = field(default=None)
    headers: ListAuditMitigationActionsExecutionsHeaders = field(default=None)
    

@dataclass
class ListAuditMitigationActionsExecutionsResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_audit_mitigation_actions_executions_response: Optional[shared.ListAuditMitigationActionsExecutionsResponse] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
