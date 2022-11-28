package shared

// InvalidParameterException
// One or more parameters in your request was invalid.
type InvalidParameterException struct {
	Message *string `json:"message,omitempty"`
}
