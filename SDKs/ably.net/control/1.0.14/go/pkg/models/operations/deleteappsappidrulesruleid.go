package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAppsAppIDRulesRuleIDPathParams struct {
	AppID  string `pathParam:"style=simple,explode=false,name=app_id"`
	RuleID string `pathParam:"style=simple,explode=false,name=rule_id"`
}

type DeleteAppsAppIDRulesRuleIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type DeleteAppsAppIDRulesRuleIDRequest struct {
	PathParams DeleteAppsAppIDRulesRuleIDPathParams
	Security   DeleteAppsAppIDRulesRuleIDSecurity
}

type DeleteAppsAppIDRulesRuleIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
}
