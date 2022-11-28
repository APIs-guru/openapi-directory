package shared

// InvalidRuleException
// Occurs when any of the rule parameter keys or values are invalid.
type InvalidRuleException struct {
	Message *string `json:"Message,omitempty"`
}
