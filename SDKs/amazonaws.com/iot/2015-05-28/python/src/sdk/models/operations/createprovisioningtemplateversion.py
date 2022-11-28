from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateProvisioningTemplateVersionPathParams:
    template_name: str = field(metadata={'path_param': { 'field_name': 'templateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateProvisioningTemplateVersionQueryParams:
    set_as_default: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'setAsDefault', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateProvisioningTemplateVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateProvisioningTemplateVersionRequestBody:
    template_body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateBody') }})
    

@dataclass
class CreateProvisioningTemplateVersionRequest:
    headers: CreateProvisioningTemplateVersionHeaders = field()
    path_params: CreateProvisioningTemplateVersionPathParams = field()
    query_params: CreateProvisioningTemplateVersionQueryParams = field()
    request: CreateProvisioningTemplateVersionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateProvisioningTemplateVersionResponse:
    content_type: str = field()
    status_code: int = field()
    conflicting_resource_update_exception: Optional[Any] = field(default=None)
    create_provisioning_template_version_response: Optional[shared.CreateProvisioningTemplateVersionResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    versions_limit_exceeded_exception: Optional[Any] = field(default=None)
    
