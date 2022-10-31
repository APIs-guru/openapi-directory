package operations

import (
"openapi/pkg/models/shared")

type GetAppsAppIDRulesPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=app_id"`
    
}

type GetAppsAppIDRulesSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAppsAppIDRulesRequest struct {
    PathParams GetAppsAppIDRulesPathParams 
    Security GetAppsAppIDRulesSecurity 
    
}

type GetAppsAppIDRulesResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    RuleResponses []interface{} 
    
}

