from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateProvisioningTemplateVersionPathParams:
    template_name: str = field(default=None, metadata={'path_param': { 'field_name': 'templateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateProvisioningTemplateVersionQueryParams:
    set_as_default: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'setAsDefault', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateProvisioningTemplateVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateProvisioningTemplateVersionRequestBody:
    template_body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateBody' }})
    

@dataclass
class CreateProvisioningTemplateVersionRequest:
    path_params: CreateProvisioningTemplateVersionPathParams = field(default=None)
    query_params: CreateProvisioningTemplateVersionQueryParams = field(default=None)
    headers: CreateProvisioningTemplateVersionHeaders = field(default=None)
    request: CreateProvisioningTemplateVersionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateProvisioningTemplateVersionResponse:
    conflicting_resource_update_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_provisioning_template_version_response: Optional[shared.CreateProvisioningTemplateVersionResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    versions_limit_exceeded_exception: Optional[Any] = field(default=None)
    
