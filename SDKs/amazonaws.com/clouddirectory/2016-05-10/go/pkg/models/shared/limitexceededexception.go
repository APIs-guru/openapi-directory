package shared

// LimitExceededException
// Indicates that limits are exceeded. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/limits.html">Limits</a> for more information.
type LimitExceededException struct {
	Message *string `json:"Message,omitempty"`
}
