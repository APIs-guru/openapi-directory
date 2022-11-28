package shared

// InternalServiceErrorException
// An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums.
type InternalServiceErrorException struct {
	Message *string `json:"message,omitempty"`
}
