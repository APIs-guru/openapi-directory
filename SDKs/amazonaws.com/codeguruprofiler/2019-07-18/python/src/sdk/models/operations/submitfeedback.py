from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class SubmitFeedbackPathParams:
    anomaly_instance_id: str = field(default=None, metadata={'path_param': { 'field_name': 'anomalyInstanceId', 'style': 'simple', 'explode': False }})
    profiling_group_name: str = field(default=None, metadata={'path_param': { 'field_name': 'profilingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubmitFeedbackHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class SubmitFeedbackRequestBodyTypeEnum(str, Enum):
    POSITIVE = "Positive"
    NEGATIVE = "Negative"


@dataclass_json
@dataclass
class SubmitFeedbackRequestBody:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    type: SubmitFeedbackRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class SubmitFeedbackRequest:
    path_params: SubmitFeedbackPathParams = field(default=None)
    headers: SubmitFeedbackHeaders = field(default=None)
    request: SubmitFeedbackRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubmitFeedbackResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    submit_feedback_response: Optional[dict[str, Any]] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
