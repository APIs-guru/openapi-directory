package shared

type CloudflareWorkerRulePostRequestModeEnum string

const (
	CloudflareWorkerRulePostRequestModeEnumSingle CloudflareWorkerRulePostRequestModeEnum = "single"
	CloudflareWorkerRulePostRequestModeEnumBatch  CloudflareWorkerRulePostRequestModeEnum = "batch"
)

type CloudflareWorkerRulePostRuleTypeEnum string

const (
	CloudflareWorkerRulePostRuleTypeEnumHTTPCloudflareWorker CloudflareWorkerRulePostRuleTypeEnum = "http/cloudflare-worker"
)

type CloudflareWorkerRulePostStatusEnum string

const (
	CloudflareWorkerRulePostStatusEnumEnabled  CloudflareWorkerRulePostStatusEnum = "enabled"
	CloudflareWorkerRulePostStatusEnumDisabled CloudflareWorkerRulePostStatusEnum = "disabled"
)

type CloudflareWorkerRulePostTargetHeaders struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type CloudflareWorkerRulePostTarget struct {
	Headers      []CloudflareWorkerRulePostTargetHeaders `json:"headers"`
	SigningKeyID *string                                 `json:"signingKeyId"`
	URL          string                                  `json:"url"`
}

type CloudflareWorkerRulePost struct {
	RequestMode CloudflareWorkerRulePostRequestModeEnum `json:"requestMode"`
	RuleType    CloudflareWorkerRulePostRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                              `json:"source"`
	Status      *CloudflareWorkerRulePostStatusEnum     `json:"status"`
	Target      CloudflareWorkerRulePostTarget          `json:"target"`
}
