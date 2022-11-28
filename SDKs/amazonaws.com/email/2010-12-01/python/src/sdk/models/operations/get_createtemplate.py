from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateTemplateActionEnum(str, Enum):
    CREATE_TEMPLATE = "CreateTemplate"


@dataclass
class GetCreateTemplateTemplate:
    r"""GetCreateTemplateTemplate
    The content of the email, composed of a subject line, an HTML part, and a text-only part.
    """
    
    template_name: str = field(metadata={'query_param': { 'field_name': 'TemplateName' }})
    html_part: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'HtmlPart' }})
    subject_part: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SubjectPart' }})
    text_part: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TextPart' }})
    
class GetCreateTemplateVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetCreateTemplateQueryParams:
    action: GetCreateTemplateActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    template: GetCreateTemplateTemplate = field(metadata={'query_param': { 'field_name': 'Template', 'style': 'form', 'explode': True }})
    version: GetCreateTemplateVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

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
    headers: GetCreateTemplateHeaders = field()
    query_params: GetCreateTemplateQueryParams = field()
    

@dataclass
class GetCreateTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
