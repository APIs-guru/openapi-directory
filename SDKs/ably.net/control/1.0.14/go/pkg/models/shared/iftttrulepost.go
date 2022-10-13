package shared

type IftttRulePostRequestModeEnum string

const (
	IftttRulePostRequestModeEnumSingle IftttRulePostRequestModeEnum = "single"
)

type IftttRulePostRuleTypeEnum string

const (
	IftttRulePostRuleTypeEnumHTTPIfttt IftttRulePostRuleTypeEnum = "http/ifttt"
)

type IftttRulePostStatusEnum string

const (
	IftttRulePostStatusEnumEnabled  IftttRulePostStatusEnum = "enabled"
	IftttRulePostStatusEnumDisabled IftttRulePostStatusEnum = "disabled"
)

type IftttRulePostTarget struct {
	EventName  string `json:"eventName"`
	WebhookKey string `json:"webhookKey"`
}

type IftttRulePost struct {
	RequestMode IftttRulePostRequestModeEnum `json:"requestMode"`
	RuleType    IftttRulePostRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                   `json:"source"`
	Status      *IftttRulePostStatusEnum     `json:"status"`
	Target      IftttRulePostTarget          `json:"target"`
}
