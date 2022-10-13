package operations

import (
	"openapi/pkg/models/shared"
)

type PostAppsAppIDRulesPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=app_id"`
}

type PostAppsAppIDRulesSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type PostAppsAppIDRulesRequest struct {
	PathParams PostAppsAppIDRulesPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   PostAppsAppIDRulesSecurity
}

type PostAppsAppIDRulesResponse struct {
	ContentType  string
	StatusCode   int64
	Error        *shared.Error
	RuleResponse *interface{}
}
