from dataclasses import dataclass, field
from typing import Enum,Optional

class GetUpdateSynonymOptionsActionEnum(str, Enum):
    UPDATE_SYNONYM_OPTIONS = "UpdateSynonymOptions"

class GetUpdateSynonymOptionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_02_01 = "2011-02-01"


@dataclass
class GetUpdateSynonymOptionsQueryParams:
    action: GetUpdateSynonymOptionsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'DomainName', 'style': 'form', 'explode': True }})
    synonyms: str = field(default=None, metadata={'query_param': { 'field_name': 'Synonyms', 'style': 'form', 'explode': True }})
    version: GetUpdateSynonymOptionsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateSynonymOptionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUpdateSynonymOptionsRequest:
    query_params: GetUpdateSynonymOptionsQueryParams = field(default=None)
    headers: GetUpdateSynonymOptionsHeaders = field(default=None)
    

@dataclass
class GetUpdateSynonymOptionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
