from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteAnalysisSchemeActionEnum(str, Enum):
    DELETE_ANALYSIS_SCHEME = "DeleteAnalysisScheme"

class GetDeleteAnalysisSchemeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_01 = "2013-01-01"


@dataclass
class GetDeleteAnalysisSchemeQueryParams:
    action: GetDeleteAnalysisSchemeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    analysis_scheme_name: str = field(default=None, metadata={'query_param': { 'field_name': 'AnalysisSchemeName', 'style': 'form', 'explode': True }})
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'DomainName', 'style': 'form', 'explode': True }})
    version: GetDeleteAnalysisSchemeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteAnalysisSchemeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDeleteAnalysisSchemeRequest:
    query_params: GetDeleteAnalysisSchemeQueryParams = field(default=None)
    headers: GetDeleteAnalysisSchemeHeaders = field(default=None)
    

@dataclass
class GetDeleteAnalysisSchemeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
