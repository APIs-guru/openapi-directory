from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class StartAuditMitigationActionsTaskPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartAuditMitigationActionsTaskHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class StartAuditMitigationActionsTaskRequestBodyTarget:
    r"""StartAuditMitigationActionsTaskRequestBodyTarget
    Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
    """
    
    audit_check_to_reason_code_filter: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditCheckToReasonCodeFilter') }})
    audit_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditTaskId') }})
    finding_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingIds') }})
    

@dataclass_json
@dataclass
class StartAuditMitigationActionsTaskRequestBody:
    audit_check_to_actions_mapping: dict[str, List[str]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditCheckToActionsMapping') }})
    client_request_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    target: StartAuditMitigationActionsTaskRequestBodyTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    

@dataclass
class StartAuditMitigationActionsTaskRequest:
    headers: StartAuditMitigationActionsTaskHeaders = field()
    path_params: StartAuditMitigationActionsTaskPathParams = field()
    request: StartAuditMitigationActionsTaskRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartAuditMitigationActionsTaskResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    start_audit_mitigation_actions_task_response: Optional[shared.StartAuditMitigationActionsTaskResponse] = field(default=None)
    task_already_exists_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
