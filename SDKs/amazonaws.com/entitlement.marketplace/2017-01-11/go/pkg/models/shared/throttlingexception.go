package shared

// ThrottlingException
// The calls to the GetEntitlements API are throttled.
type ThrottlingException struct {
	Message *string `json:"message,omitempty"`
}
