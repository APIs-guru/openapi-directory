package shared

type RepublishAction struct {
	Qos     *int64 `json:"qos"`
	RoleArn string `json:"roleArn"`
	Topic   string `json:"topic"`
}
