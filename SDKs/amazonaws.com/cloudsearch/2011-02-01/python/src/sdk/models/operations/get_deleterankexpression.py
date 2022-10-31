from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteRankExpressionActionEnum(str, Enum):
    DELETE_RANK_EXPRESSION = "DeleteRankExpression"

class GetDeleteRankExpressionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_02_01 = "2011-02-01"


@dataclass
class GetDeleteRankExpressionQueryParams:
    action: GetDeleteRankExpressionActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'DomainName', 'style': 'form', 'explode': True }})
    rank_name: str = field(default=None, metadata={'query_param': { 'field_name': 'RankName', 'style': 'form', 'explode': True }})
    version: GetDeleteRankExpressionVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteRankExpressionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteRankExpressionRequest:
    query_params: GetDeleteRankExpressionQueryParams = field(default=None)
    headers: GetDeleteRankExpressionHeaders = field(default=None)
    

@dataclass
class GetDeleteRankExpressionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
