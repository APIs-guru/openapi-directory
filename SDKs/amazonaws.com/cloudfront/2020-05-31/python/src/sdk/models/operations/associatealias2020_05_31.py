from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AssociateAlias20200531PathParams:
    target_distribution_id: str = field(default=None, metadata={'path_param': { 'field_name': 'TargetDistributionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateAlias20200531QueryParams:
    alias: str = field(default=None, metadata={'query_param': { 'field_name': 'Alias', 'style': 'form', 'explode': True }})
    

@dataclass
class AssociateAlias20200531Headers:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class AssociateAlias20200531Request:
    path_params: AssociateAlias20200531PathParams = field(default=None)
    query_params: AssociateAlias20200531QueryParams = field(default=None)
    headers: AssociateAlias20200531Headers = field(default=None)
    

@dataclass
class AssociateAlias20200531Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
