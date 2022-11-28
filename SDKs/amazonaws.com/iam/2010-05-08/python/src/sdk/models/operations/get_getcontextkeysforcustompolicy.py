from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetGetContextKeysForCustomPolicyActionEnum(str, Enum):
    GET_CONTEXT_KEYS_FOR_CUSTOM_POLICY = "GetContextKeysForCustomPolicy"

class GetGetContextKeysForCustomPolicyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetGetContextKeysForCustomPolicyQueryParams:
    action: GetGetContextKeysForCustomPolicyActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    policy_input_list: List[str] = field(metadata={'query_param': { 'field_name': 'PolicyInputList', 'style': 'form', 'explode': True }})
    version: GetGetContextKeysForCustomPolicyVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetContextKeysForCustomPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGetContextKeysForCustomPolicyRequest:
    headers: GetGetContextKeysForCustomPolicyHeaders = field()
    query_params: GetGetContextKeysForCustomPolicyQueryParams = field()
    

@dataclass
class GetGetContextKeysForCustomPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
