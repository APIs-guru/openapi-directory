from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PatchAppsAppIDRulesRuleIDPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    rule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'rule_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAppsAppIDRulesRuleIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PatchAppsAppIDRulesRuleIDRequest:
    path_params: PatchAppsAppIDRulesRuleIDPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchAppsAppIDRulesRuleIDSecurity = field(default=None)
    

@dataclass
class PatchAppsAppIDRulesRuleIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    rule_response: Optional[Any] = field(default=None)
    
