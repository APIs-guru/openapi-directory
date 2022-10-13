from dataclasses import dataclass, field
from typing import Enum,Optional

class GetSetReceiptRulePositionActionEnum(str, Enum):
    SET_RECEIPT_RULE_POSITION = "SetReceiptRulePosition"

class GetSetReceiptRulePositionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetSetReceiptRulePositionQueryParams:
    action: GetSetReceiptRulePositionActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'After', 'style': 'form', 'explode': True }})
    rule_name: str = field(default=None, metadata={'query_param': { 'field_name': 'RuleName', 'style': 'form', 'explode': True }})
    rule_set_name: str = field(default=None, metadata={'query_param': { 'field_name': 'RuleSetName', 'style': 'form', 'explode': True }})
    version: GetSetReceiptRulePositionVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetReceiptRulePositionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetSetReceiptRulePositionRequest:
    query_params: GetSetReceiptRulePositionQueryParams = field(default=None)
    headers: GetSetReceiptRulePositionHeaders = field(default=None)
    

@dataclass
class GetSetReceiptRulePositionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
