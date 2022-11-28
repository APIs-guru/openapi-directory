package shared

// RepublishAction
// Describes an action to republish to another topic.
type RepublishAction struct {
	Qos     *int64 `json:"qos,omitempty"`
	RoleArn string `json:"roleArn"`
	Topic   string `json:"topic"`
}
