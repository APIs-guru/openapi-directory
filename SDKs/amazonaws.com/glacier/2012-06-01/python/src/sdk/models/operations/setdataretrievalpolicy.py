from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SetDataRetrievalPolicyPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetDataRetrievalPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class SetDataRetrievalPolicyRequestBodyPolicy:
    rules: Optional[List[shared.DataRetrievalRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    

@dataclass_json
@dataclass
class SetDataRetrievalPolicyRequestBody:
    policy: Optional[SetDataRetrievalPolicyRequestBodyPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policy' }})
    

@dataclass
class SetDataRetrievalPolicyRequest:
    path_params: SetDataRetrievalPolicyPathParams = field(default=None)
    headers: SetDataRetrievalPolicyHeaders = field(default=None)
    request: SetDataRetrievalPolicyRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetDataRetrievalPolicyResponse:
    content_type: str = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    missing_parameter_value_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
