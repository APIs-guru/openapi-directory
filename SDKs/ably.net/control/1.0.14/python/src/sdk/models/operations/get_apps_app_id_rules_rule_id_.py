from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAppsAppIDRulesRuleIDPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    rule_id: str = field(metadata={'path_param': { 'field_name': 'rule_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAppsAppIDRulesRuleIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAppsAppIDRulesRuleIDRequest:
    path_params: GetAppsAppIDRulesRuleIDPathParams = field()
    security: GetAppsAppIDRulesRuleIDSecurity = field()
    

@dataclass
class GetAppsAppIDRulesRuleIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    rule_response: Optional[Any] = field(default=None)
    
