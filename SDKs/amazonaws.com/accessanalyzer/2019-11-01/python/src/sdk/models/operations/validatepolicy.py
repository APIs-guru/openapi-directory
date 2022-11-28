from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ValidatePolicyQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ValidatePolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
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
    policy_document: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyDocument') }})
    policy_type: ValidatePolicyRequestBodyPolicyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyType') }})
    locale: Optional[ValidatePolicyRequestBodyLocaleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    

@dataclass
class ValidatePolicyRequest:
    headers: ValidatePolicyHeaders = field()
    query_params: ValidatePolicyQueryParams = field()
    request: ValidatePolicyRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ValidatePolicyResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validate_policy_response: Optional[shared.ValidatePolicyResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
