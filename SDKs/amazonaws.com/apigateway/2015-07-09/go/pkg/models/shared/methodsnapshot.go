package shared

// MethodSnapshot
// Represents a summary of a <a>Method</a> resource, given a particular date and time.
type MethodSnapshot struct {
	APIKeyRequired    *bool   `json:"apiKeyRequired,omitempty"`
	AuthorizationType *string `json:"authorizationType,omitempty"`
}
