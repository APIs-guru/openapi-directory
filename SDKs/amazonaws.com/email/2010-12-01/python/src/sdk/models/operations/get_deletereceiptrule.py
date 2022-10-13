from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteReceiptRuleActionEnum(str, Enum):
    DELETE_RECEIPT_RULE = "DeleteReceiptRule"

class GetDeleteReceiptRuleVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetDeleteReceiptRuleQueryParams:
    action: GetDeleteReceiptRuleActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    rule_name: str = field(default=None, metadata={'query_param': { 'field_name': 'RuleName', 'style': 'form', 'explode': True }})
    rule_set_name: str = field(default=None, metadata={'query_param': { 'field_name': 'RuleSetName', 'style': 'form', 'explode': True }})
    version: GetDeleteReceiptRuleVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteReceiptRuleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDeleteReceiptRuleRequest:
    query_params: GetDeleteReceiptRuleQueryParams = field(default=None)
    headers: GetDeleteReceiptRuleHeaders = field(default=None)
    

@dataclass
class GetDeleteReceiptRuleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
