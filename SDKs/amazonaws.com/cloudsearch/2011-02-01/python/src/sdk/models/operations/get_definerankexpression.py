from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDefineRankExpressionActionEnum(str, Enum):
    DEFINE_RANK_EXPRESSION = "DefineRankExpression"


@dataclass
class GetDefineRankExpressionRankExpression:
    r"""GetDefineRankExpressionRankExpression
    A named expression that can be evaluated at search time and used for ranking or thresholding in a search query. 
    """
    
    rank_expression: str = field(metadata={'query_param': { 'field_name': 'RankExpression' }})
    rank_name: str = field(metadata={'query_param': { 'field_name': 'RankName' }})
    
class GetDefineRankExpressionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_02_01 = "2011-02-01"


@dataclass
class GetDefineRankExpressionQueryParams:
    action: GetDefineRankExpressionActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    domain_name: str = field(metadata={'query_param': { 'field_name': 'DomainName', 'style': 'form', 'explode': True }})
    rank_expression: GetDefineRankExpressionRankExpression = field(metadata={'query_param': { 'field_name': 'RankExpression', 'style': 'form', 'explode': True }})
    version: GetDefineRankExpressionVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDefineRankExpressionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDefineRankExpressionRequest:
    headers: GetDefineRankExpressionHeaders = field()
    query_params: GetDefineRankExpressionQueryParams = field()
    

@dataclass
class GetDefineRankExpressionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
