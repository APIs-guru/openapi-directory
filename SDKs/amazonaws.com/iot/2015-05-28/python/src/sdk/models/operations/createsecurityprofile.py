from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateSecurityProfilePathParams:
    security_profile_name: str = field(default=None, metadata={'path_param': { 'field_name': 'securityProfileName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSecurityProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateSecurityProfileRequestBody:
    additional_metrics_to_retain: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalMetricsToRetain' }})
    additional_metrics_to_retain_v2: Optional[List[shared.MetricToRetain]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalMetricsToRetainV2' }})
    alert_targets: Optional[dict[str, shared.AlertTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertTargets' }})
    behaviors: Optional[List[shared.Behavior]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'behaviors' }})
    security_profile_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProfileDescription' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateSecurityProfileRequest:
    path_params: CreateSecurityProfilePathParams = field(default=None)
    headers: CreateSecurityProfileHeaders = field(default=None)
    request: CreateSecurityProfileRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSecurityProfileResponse:
    content_type: str = field(default=None)
    create_security_profile_response: Optional[shared.CreateSecurityProfileResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
