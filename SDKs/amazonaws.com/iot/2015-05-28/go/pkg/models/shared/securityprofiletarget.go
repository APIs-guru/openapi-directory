package shared

// SecurityProfileTarget
// A target to which an alert is sent when a security profile behavior is violated.
type SecurityProfileTarget struct {
	Arn string `json:"arn"`
}
