from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetDescribeSuggestersActionEnum(str, Enum):
    DESCRIBE_SUGGESTERS = "DescribeSuggesters"

class GetDescribeSuggestersVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_01 = "2013-01-01"


@dataclass
class GetDescribeSuggestersQueryParams:
    action: GetDescribeSuggestersActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    deployed: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Deployed', 'style': 'form', 'explode': True }})
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'DomainName', 'style': 'form', 'explode': True }})
    suggester_names: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'SuggesterNames', 'style': 'form', 'explode': True }})
    version: GetDescribeSuggestersVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeSuggestersHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeSuggestersRequest:
    query_params: GetDescribeSuggestersQueryParams = field(default=None)
    headers: GetDescribeSuggestersHeaders = field(default=None)
    

@dataclass
class GetDescribeSuggestersResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
