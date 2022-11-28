package shared

// ValidationException
// Indicates that your request is malformed in some manner. See the exception message.
type ValidationException struct {
	Message *string `json:"Message,omitempty"`
}
