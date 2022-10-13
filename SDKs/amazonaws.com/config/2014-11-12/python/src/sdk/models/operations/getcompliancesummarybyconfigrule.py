from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetComplianceSummaryByConfigRuleXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_COMPLIANCE_SUMMARY_BY_CONFIG_RULE = "StarlingDoveService.GetComplianceSummaryByConfigRule"


@dataclass
class GetComplianceSummaryByConfigRuleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetComplianceSummaryByConfigRuleXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetComplianceSummaryByConfigRuleRequest:
    headers: GetComplianceSummaryByConfigRuleHeaders = field(default=None)
    

@dataclass
class GetComplianceSummaryByConfigRuleResponse:
    content_type: str = field(default=None)
    get_compliance_summary_by_config_rule_response: Optional[shared.GetComplianceSummaryByConfigRuleResponse] = field(default=None)
    status_code: int = field(default=None)
    
