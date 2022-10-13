from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetAppsAppIDRulesPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAppsAppIDRulesSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAppsAppIDRulesRequest:
    path_params: GetAppsAppIDRulesPathParams = field(default=None)
    security: GetAppsAppIDRulesSecurity = field(default=None)
    

@dataclass
class GetAppsAppIDRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    rule_responses: Optional[List[Any]] = field(default=None)
    
