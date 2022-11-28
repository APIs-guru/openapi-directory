from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateProvisioningTemplatePathParams:
    template_name: str = field(metadata={'path_param': { 'field_name': 'templateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateProvisioningTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateProvisioningTemplateRequestBodyPreProvisioningHook:
    r"""UpdateProvisioningTemplateRequestBodyPreProvisioningHook
    Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
    """
    
    payload_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloadVersion') }})
    target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetArn') }})
    

@dataclass_json
@dataclass
class UpdateProvisioningTemplateRequestBody:
    default_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultVersionId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    pre_provisioning_hook: Optional[UpdateProvisioningTemplateRequestBodyPreProvisioningHook] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preProvisioningHook') }})
    provisioning_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningRoleArn') }})
    remove_pre_provisioning_hook: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removePreProvisioningHook') }})
    

@dataclass
class UpdateProvisioningTemplateRequest:
    headers: UpdateProvisioningTemplateHeaders = field()
    path_params: UpdateProvisioningTemplatePathParams = field()
    request: UpdateProvisioningTemplateRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateProvisioningTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    conflicting_resource_update_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    update_provisioning_template_response: Optional[dict[str, Any]] = field(default=None)
    
