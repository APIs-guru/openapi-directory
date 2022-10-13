package shared

type CloudflareWorkerRulePatchRequestModeEnum string

const (
	CloudflareWorkerRulePatchRequestModeEnumSingle CloudflareWorkerRulePatchRequestModeEnum = "single"
	CloudflareWorkerRulePatchRequestModeEnumBatch  CloudflareWorkerRulePatchRequestModeEnum = "batch"
)

type CloudflareWorkerRulePatchRuleTypeEnum string

const (
	CloudflareWorkerRulePatchRuleTypeEnumHTTPCloudflareWorker CloudflareWorkerRulePatchRuleTypeEnum = "http/cloudflare-worker"
)

type CloudflareWorkerRulePatchStatusEnum string

const (
	CloudflareWorkerRulePatchStatusEnumEnabled  CloudflareWorkerRulePatchStatusEnum = "enabled"
	CloudflareWorkerRulePatchStatusEnumDisabled CloudflareWorkerRulePatchStatusEnum = "disabled"
)

type CloudflareWorkerRulePatchTargetHeaders struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type CloudflareWorkerRulePatchTarget struct {
	Headers      []CloudflareWorkerRulePatchTargetHeaders `json:"headers"`
	SigningKeyID *string                                  `json:"signingKeyId"`
	URL          *string                                  `json:"url"`
}

type CloudflareWorkerRulePatch struct {
	RequestMode *CloudflareWorkerRulePatchRequestModeEnum `json:"requestMode"`
	RuleType    *CloudflareWorkerRulePatchRuleTypeEnum    `json:"ruleType"`
	Source      *RuleSource                               `json:"source"`
	Status      *CloudflareWorkerRulePatchStatusEnum      `json:"status"`
	Target      *CloudflareWorkerRulePatchTarget          `json:"target"`
}
