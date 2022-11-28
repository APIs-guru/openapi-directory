package shared

// APIKeyIds
// The identifier of an <a>ApiKey</a> used in a <a>UsagePlan</a>.
type APIKeyIds struct {
	Ids      []string `json:"ids,omitempty"`
	Warnings []string `json:"warnings,omitempty"`
}
