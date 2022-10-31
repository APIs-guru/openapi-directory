package operations

import (
"openapi/pkg/models/shared")

type PatchAppsAppIDRulesRuleIDPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=app_id"`
    RuleID string `pathParam:"style=simple,explode=false,name=rule_id"`
    
}

type PatchAppsAppIDRulesRuleIDSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type PatchAppsAppIDRulesRuleIDRequest struct {
    PathParams PatchAppsAppIDRulesRuleIDPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    Security PatchAppsAppIDRulesRuleIDSecurity 
    
}

type PatchAppsAppIDRulesRuleIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    RuleResponse *interface{} 
    
}

