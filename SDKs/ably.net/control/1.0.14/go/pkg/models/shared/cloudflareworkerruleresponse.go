package shared

type CloudflareWorkerRuleResponseRequestModeEnum string

const (
	CloudflareWorkerRuleResponseRequestModeEnumSingle CloudflareWorkerRuleResponseRequestModeEnum = "single"
	CloudflareWorkerRuleResponseRequestModeEnumBatch  CloudflareWorkerRuleResponseRequestModeEnum = "batch"
)

type CloudflareWorkerRuleResponseRuleTypeEnum string

const (
	CloudflareWorkerRuleResponseRuleTypeEnumHTTPCloudflareWorker CloudflareWorkerRuleResponseRuleTypeEnum = "http/cloudflare-worker"
)

type CloudflareWorkerRuleResponseStatusEnum string

const (
	CloudflareWorkerRuleResponseStatusEnumEnabled  CloudflareWorkerRuleResponseStatusEnum = "enabled"
	CloudflareWorkerRuleResponseStatusEnumDisabled CloudflareWorkerRuleResponseStatusEnum = "disabled"
)

type CloudflareWorkerRuleResponseTargetHeaders struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type CloudflareWorkerRuleResponseTarget struct {
	Headers      []CloudflareWorkerRuleResponseTargetHeaders `json:"headers"`
	SigningKeyID *string                                     `json:"signingKeyId"`
	URL          string                                      `json:"url"`
}

type CloudflareWorkerRuleResponse struct {
	Links       map[string]interface{}                      `json:"_links"`
	AppID       *string                                     `json:"appId"`
	Created     *float64                                    `json:"created"`
	ID          *string                                     `json:"id"`
	Modified    *float64                                    `json:"modified"`
	RequestMode CloudflareWorkerRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    CloudflareWorkerRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                                  `json:"source"`
	Status      *CloudflareWorkerRuleResponseStatusEnum     `json:"status"`
	Target      CloudflareWorkerRuleResponseTarget          `json:"target"`
	Version     *string                                     `json:"version"`
}
