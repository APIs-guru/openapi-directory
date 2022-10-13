from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateProvisioningTemplatePathParams:
    template_name: str = field(default=None, metadata={'path_param': { 'field_name': 'templateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateProvisioningTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateProvisioningTemplateRequestBodyPreProvisioningHook:
    payload_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payloadVersion' }})
    target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetArn' }})
    

@dataclass_json
@dataclass
class UpdateProvisioningTemplateRequestBody:
    default_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultVersionId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    pre_provisioning_hook: Optional[UpdateProvisioningTemplateRequestBodyPreProvisioningHook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preProvisioningHook' }})
    provisioning_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisioningRoleArn' }})
    remove_pre_provisioning_hook: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removePreProvisioningHook' }})
    

@dataclass
class UpdateProvisioningTemplateRequest:
    path_params: UpdateProvisioningTemplatePathParams = field(default=None)
    headers: UpdateProvisioningTemplateHeaders = field(default=None)
    request: UpdateProvisioningTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateProvisioningTemplateResponse:
    conflicting_resource_update_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    update_provisioning_template_response: Optional[dict[str, Any]] = field(default=None)
    
