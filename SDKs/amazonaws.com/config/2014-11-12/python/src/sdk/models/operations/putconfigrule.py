from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutConfigRuleXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_CONFIG_RULE = "StarlingDoveService.PutConfigRule"


@dataclass
class PutConfigRuleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: PutConfigRuleXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class PutConfigRuleRequest:
    headers: PutConfigRuleHeaders = field(default=None)
    request: shared.PutConfigRuleRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutConfigRuleResponse:
    content_type: str = field(default=None)
    insufficient_permissions_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    max_number_of_config_rules_exceeded_exception: Optional[Any] = field(default=None)
    no_available_configuration_recorder_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
