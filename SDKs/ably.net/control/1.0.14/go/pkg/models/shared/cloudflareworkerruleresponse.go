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
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type CloudflareWorkerRuleResponseTarget struct {
	Headers      []CloudflareWorkerRuleResponseTargetHeaders `json:"headers,omitempty"`
	SigningKeyID *string                                     `json:"signingKeyId,omitempty"`
	URL          string                                      `json:"url"`
}

type CloudflareWorkerRuleResponse struct {
	Links       map[string]interface{}                      `json:"_links,omitempty"`
	AppID       *string                                     `json:"appId,omitempty"`
	Created     *float64                                    `json:"created,omitempty"`
	ID          *string                                     `json:"id,omitempty"`
	Modified    *float64                                    `json:"modified,omitempty"`
	RequestMode CloudflareWorkerRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    CloudflareWorkerRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                                  `json:"source"`
	Status      *CloudflareWorkerRuleResponseStatusEnum     `json:"status,omitempty"`
	Target      CloudflareWorkerRuleResponseTarget          `json:"target"`
	Version     *string                                     `json:"version,omitempty"`
}
