from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class StartAuditMitigationActionsTaskPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartAuditMitigationActionsTaskHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class StartAuditMitigationActionsTaskRequestBodyTarget:
    audit_check_to_reason_code_filter: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditCheckToReasonCodeFilter' }})
    audit_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditTaskId' }})
    finding_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingIds' }})
    

@dataclass_json
@dataclass
class StartAuditMitigationActionsTaskRequestBody:
    audit_check_to_actions_mapping: dict[str, List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditCheckToActionsMapping' }})
    client_request_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    target: StartAuditMitigationActionsTaskRequestBodyTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    

@dataclass
class StartAuditMitigationActionsTaskRequest:
    path_params: StartAuditMitigationActionsTaskPathParams = field(default=None)
    headers: StartAuditMitigationActionsTaskHeaders = field(default=None)
    request: StartAuditMitigationActionsTaskRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartAuditMitigationActionsTaskResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    start_audit_mitigation_actions_task_response: Optional[shared.StartAuditMitigationActionsTaskResponse] = field(default=None)
    status_code: int = field(default=None)
    task_already_exists_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
