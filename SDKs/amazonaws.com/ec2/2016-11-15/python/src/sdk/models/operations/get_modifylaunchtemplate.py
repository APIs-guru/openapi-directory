from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyLaunchTemplateActionEnum(str, Enum):
    MODIFY_LAUNCH_TEMPLATE = "ModifyLaunchTemplate"

class GetModifyLaunchTemplateVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyLaunchTemplateQueryParams:
    action: GetModifyLaunchTemplateActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetModifyLaunchTemplateVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    client_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClientToken', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    launch_template_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LaunchTemplateId', 'style': 'form', 'explode': True }})
    launch_template_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LaunchTemplateName', 'style': 'form', 'explode': True }})
    set_default_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SetDefaultVersion', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyLaunchTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyLaunchTemplateRequest:
    headers: GetModifyLaunchTemplateHeaders = field()
    query_params: GetModifyLaunchTemplateQueryParams = field()
    

@dataclass
class GetModifyLaunchTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
