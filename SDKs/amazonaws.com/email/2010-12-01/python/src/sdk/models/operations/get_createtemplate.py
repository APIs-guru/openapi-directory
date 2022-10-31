from dataclasses import dataclass, field
from typing import Enum,Optional

class GetCreateTemplateActionEnum(str, Enum):
    CREATE_TEMPLATE = "CreateTemplate"


@dataclass
class GetCreateTemplateTemplate:
    html_part: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'HtmlPart' }})
    subject_part: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SubjectPart' }})
    template_name: str = field(default=None, metadata={'query_param': { 'field_name': 'TemplateName' }})
    text_part: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TextPart' }})
    
class GetCreateTemplateVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetCreateTemplateQueryParams:
    action: GetCreateTemplateActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    template: GetCreateTemplateTemplate = field(default=None, metadata={'query_param': { 'field_name': 'Template', 'style': 'form', 'explode': True }})
    version: GetCreateTemplateVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateTemplateRequest:
    query_params: GetCreateTemplateQueryParams = field(default=None)
    headers: GetCreateTemplateHeaders = field(default=None)
    

@dataclass
class GetCreateTemplateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
