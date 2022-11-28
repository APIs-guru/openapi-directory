from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateSecurityProfilePathParams:
    security_profile_name: str = field(metadata={'path_param': { 'field_name': 'securityProfileName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSecurityProfileQueryParams:
    expected_version: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'expectedVersion', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateSecurityProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateSecurityProfileRequestBody:
    additional_metrics_to_retain: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalMetricsToRetain') }})
    additional_metrics_to_retain_v2: Optional[List[shared.MetricToRetain]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalMetricsToRetainV2') }})
    alert_targets: Optional[dict[str, shared.AlertTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertTargets') }})
    behaviors: Optional[List[shared.Behavior]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('behaviors') }})
    delete_additional_metrics_to_retain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteAdditionalMetricsToRetain') }})
    delete_alert_targets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteAlertTargets') }})
    delete_behaviors: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteBehaviors') }})
    security_profile_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileDescription') }})
    

@dataclass
class UpdateSecurityProfileRequest:
    headers: UpdateSecurityProfileHeaders = field()
    path_params: UpdateSecurityProfilePathParams = field()
    query_params: UpdateSecurityProfileQueryParams = field()
    request: UpdateSecurityProfileRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSecurityProfileResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_security_profile_response: Optional[shared.UpdateSecurityProfileResponse] = field(default=None)
    version_conflict_exception: Optional[Any] = field(default=None)
    
