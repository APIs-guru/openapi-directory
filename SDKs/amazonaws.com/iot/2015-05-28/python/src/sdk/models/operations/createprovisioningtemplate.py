from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateProvisioningTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateProvisioningTemplateRequestBodyPreProvisioningHook:
    payload_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payloadVersion' }})
    target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetArn' }})
    

@dataclass_json
@dataclass
class CreateProvisioningTemplateRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    pre_provisioning_hook: Optional[CreateProvisioningTemplateRequestBodyPreProvisioningHook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preProvisioningHook' }})
    provisioning_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisioningRoleArn' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    template_body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateBody' }})
    template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateName' }})
    

@dataclass
class CreateProvisioningTemplateRequest:
    headers: CreateProvisioningTemplateHeaders = field(default=None)
    request: CreateProvisioningTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateProvisioningTemplateResponse:
    content_type: str = field(default=None)
    create_provisioning_template_response: Optional[shared.CreateProvisioningTemplateResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
