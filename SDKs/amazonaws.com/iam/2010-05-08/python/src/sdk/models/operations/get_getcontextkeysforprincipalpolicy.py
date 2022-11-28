from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetGetContextKeysForPrincipalPolicyActionEnum(str, Enum):
    GET_CONTEXT_KEYS_FOR_PRINCIPAL_POLICY = "GetContextKeysForPrincipalPolicy"

class GetGetContextKeysForPrincipalPolicyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetGetContextKeysForPrincipalPolicyQueryParams:
    action: GetGetContextKeysForPrincipalPolicyActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    policy_source_arn: str = field(metadata={'query_param': { 'field_name': 'PolicySourceArn', 'style': 'form', 'explode': True }})
    version: GetGetContextKeysForPrincipalPolicyVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    policy_input_list: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'PolicyInputList', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetContextKeysForPrincipalPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGetContextKeysForPrincipalPolicyRequest:
    headers: GetGetContextKeysForPrincipalPolicyHeaders = field()
    query_params: GetGetContextKeysForPrincipalPolicyQueryParams = field()
    

@dataclass
class GetGetContextKeysForPrincipalPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
