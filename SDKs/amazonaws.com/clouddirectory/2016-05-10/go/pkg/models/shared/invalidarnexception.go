package shared

// InvalidArnException
// Indicates that the provided ARN value is not valid.
type InvalidArnException struct {
	Message *string `json:"Message,omitempty"`
}
