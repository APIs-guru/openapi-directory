package operations

import (
"openapi/pkg/models/shared")

type GetAppsAppIDRulesRuleIDPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=app_id"`
    RuleID string `pathParam:"style=simple,explode=false,name=rule_id"`
    
}

type GetAppsAppIDRulesRuleIDSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAppsAppIDRulesRuleIDRequest struct {
    PathParams GetAppsAppIDRulesRuleIDPathParams 
    Security GetAppsAppIDRulesRuleIDSecurity 
    
}

type GetAppsAppIDRulesRuleIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    RuleResponse *interface{} 
    
}

