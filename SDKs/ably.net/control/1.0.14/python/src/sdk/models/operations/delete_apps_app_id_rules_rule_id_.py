from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAppsAppIDRulesRuleIDPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    rule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'rule_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAppsAppIDRulesRuleIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteAppsAppIDRulesRuleIDRequest:
    path_params: DeleteAppsAppIDRulesRuleIDPathParams = field(default=None)
    security: DeleteAppsAppIDRulesRuleIDSecurity = field(default=None)
    

@dataclass
class DeleteAppsAppIDRulesRuleIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
