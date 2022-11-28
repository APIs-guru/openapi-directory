package shared

// NotPolicyException
// Indicates that the requested operation can only operate on policy objects.
type NotPolicyException struct {
	Message *string `json:"Message,omitempty"`
}
