package shared

// WebhookFilter
//
//	A filter used to determine which webhooks trigger a build.
type WebhookFilter struct {
	ExcludeMatchedPattern *bool                 `json:"excludeMatchedPattern,omitempty"`
	Pattern               string                `json:"pattern"`
	Type                  WebhookFilterTypeEnum `json:"type"`
}
