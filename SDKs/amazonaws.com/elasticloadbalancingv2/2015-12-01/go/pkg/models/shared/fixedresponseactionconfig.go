package shared

// FixedResponseActionConfig
// Information about an action that returns a custom HTTP response.
type FixedResponseActionConfig struct {
	ContentType *string
	MessageBody *string
	StatusCode  string
}
