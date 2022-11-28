from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetAppsAppIDRulesPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAppsAppIDRulesSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAppsAppIDRulesRequest:
    path_params: GetAppsAppIDRulesPathParams = field()
    security: GetAppsAppIDRulesSecurity = field()
    

@dataclass
class GetAppsAppIDRulesResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    rule_responses: Optional[List[Any]] = field(default=None)
    
