from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class StartJobPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    branch_name: str = field(default=None, metadata={'path_param': { 'field_name': 'branchName', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class StartJobRequestBodyJobTypeEnum(str, Enum):
    RELEASE = "RELEASE"
    RETRY = "RETRY"
    MANUAL = "MANUAL"
    WEB_HOOK = "WEB_HOOK"


@dataclass_json
@dataclass
class StartJobRequestBody:
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitId' }})
    commit_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitMessage' }})
    commit_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    job_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobReason' }})
    job_type: StartJobRequestBodyJobTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobType' }})
    

@dataclass
class StartJobRequest:
    path_params: StartJobPathParams = field(default=None)
    headers: StartJobHeaders = field(default=None)
    request: StartJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartJobResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    start_job_result: Optional[shared.StartJobResult] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
