from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RegisterWebhookWithThirdPartyXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_REGISTER_WEBHOOK_WITH_THIRD_PARTY = "CodePipeline_20150709.RegisterWebhookWithThirdParty"


@dataclass
class RegisterWebhookWithThirdPartyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: RegisterWebhookWithThirdPartyXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegisterWebhookWithThirdPartyRequest:
    headers: RegisterWebhookWithThirdPartyHeaders = field(default=None)
    request: shared.RegisterWebhookWithThirdPartyInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterWebhookWithThirdPartyResponse:
    content_type: str = field(default=None)
    register_webhook_with_third_party_output: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    webhook_not_found_exception: Optional[Any] = field(default=None)
    
