package shared

type WebhookFilter struct {
	ExcludeMatchedPattern *bool                 `json:"excludeMatchedPattern"`
	Pattern               string                `json:"pattern"`
	Type                  WebhookFilterTypeEnum `json:"type"`
}
