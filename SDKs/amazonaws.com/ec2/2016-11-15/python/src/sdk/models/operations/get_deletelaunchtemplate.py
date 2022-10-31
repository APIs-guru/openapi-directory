from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteLaunchTemplateActionEnum(str, Enum):
    DELETE_LAUNCH_TEMPLATE = "DeleteLaunchTemplate"

class GetDeleteLaunchTemplateVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDeleteLaunchTemplateQueryParams:
    action: GetDeleteLaunchTemplateActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    launch_template_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LaunchTemplateId', 'style': 'form', 'explode': True }})
    launch_template_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LaunchTemplateName', 'style': 'form', 'explode': True }})
    version: GetDeleteLaunchTemplateVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteLaunchTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteLaunchTemplateRequest:
    query_params: GetDeleteLaunchTemplateQueryParams = field(default=None)
    headers: GetDeleteLaunchTemplateHeaders = field(default=None)
    

@dataclass
class GetDeleteLaunchTemplateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
