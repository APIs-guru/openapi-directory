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
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type CloudflareWorkerRulePatchTarget struct {
	Headers      []CloudflareWorkerRulePatchTargetHeaders `json:"headers,omitempty"`
	SigningKeyID *string                                  `json:"signingKeyId,omitempty"`
	URL          *string                                  `json:"url,omitempty"`
}

type CloudflareWorkerRulePatch struct {
	RequestMode *CloudflareWorkerRulePatchRequestModeEnum `json:"requestMode,omitempty"`
	RuleType    *CloudflareWorkerRulePatchRuleTypeEnum    `json:"ruleType,omitempty"`
	Source      *RuleSource                               `json:"source,omitempty"`
	Status      *CloudflareWorkerRulePatchStatusEnum      `json:"status,omitempty"`
	Target      *CloudflareWorkerRulePatchTarget          `json:"target,omitempty"`
}
