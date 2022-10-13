from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ValidatePolicyQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ValidatePolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class ValidatePolicyRequestBodyLocaleEnum(str, Enum):
    DE = "DE"
    EN = "EN"
    ES = "ES"
    FR = "FR"
    IT = "IT"
    JA = "JA"
    KO = "KO"
    PT_BR = "PT_BR"
    ZH_CN = "ZH_CN"
    ZH_TW = "ZH_TW"

class ValidatePolicyRequestBodyPolicyTypeEnum(str, Enum):
    IDENTITY_POLICY = "IDENTITY_POLICY"
    RESOURCE_POLICY = "RESOURCE_POLICY"
    SERVICE_CONTROL_POLICY = "SERVICE_CONTROL_POLICY"


@dataclass_json
@dataclass
class ValidatePolicyRequestBody:
    locale: Optional[ValidatePolicyRequestBodyLocaleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    policy_document: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyDocument' }})
    policy_type: ValidatePolicyRequestBodyPolicyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyType' }})
    

@dataclass
class ValidatePolicyRequest:
    query_params: ValidatePolicyQueryParams = field(default=None)
    headers: ValidatePolicyHeaders = field(default=None)
    request: ValidatePolicyRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ValidatePolicyResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validate_policy_response: Optional[shared.ValidatePolicyResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
