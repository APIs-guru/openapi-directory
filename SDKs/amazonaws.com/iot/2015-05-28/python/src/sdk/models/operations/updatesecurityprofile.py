from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateSecurityProfilePathParams:
    security_profile_name: str = field(default=None, metadata={'path_param': { 'field_name': 'securityProfileName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSecurityProfileQueryParams:
    expected_version: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'expectedVersion', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateSecurityProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateSecurityProfileRequestBody:
    additional_metrics_to_retain: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalMetricsToRetain' }})
    additional_metrics_to_retain_v2: Optional[List[shared.MetricToRetain]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalMetricsToRetainV2' }})
    alert_targets: Optional[dict[str, shared.AlertTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertTargets' }})
    behaviors: Optional[List[shared.Behavior]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'behaviors' }})
    delete_additional_metrics_to_retain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteAdditionalMetricsToRetain' }})
    delete_alert_targets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteAlertTargets' }})
    delete_behaviors: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteBehaviors' }})
    security_profile_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProfileDescription' }})
    

@dataclass
class UpdateSecurityProfileRequest:
    path_params: UpdateSecurityProfilePathParams = field(default=None)
    query_params: UpdateSecurityProfileQueryParams = field(default=None)
    headers: UpdateSecurityProfileHeaders = field(default=None)
    request: UpdateSecurityProfileRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSecurityProfileResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_security_profile_response: Optional[shared.UpdateSecurityProfileResponse] = field(default=None)
    version_conflict_exception: Optional[Any] = field(default=None)
    
