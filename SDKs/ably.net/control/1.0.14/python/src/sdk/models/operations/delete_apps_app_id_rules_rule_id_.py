from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAppsAppIDRulesRuleIDPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    rule_id: str = field(metadata={'path_param': { 'field_name': 'rule_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAppsAppIDRulesRuleIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteAppsAppIDRulesRuleIDRequest:
    path_params: DeleteAppsAppIDRulesRuleIDPathParams = field()
    security: DeleteAppsAppIDRulesRuleIDSecurity = field()
    

@dataclass
class DeleteAppsAppIDRulesRuleIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
