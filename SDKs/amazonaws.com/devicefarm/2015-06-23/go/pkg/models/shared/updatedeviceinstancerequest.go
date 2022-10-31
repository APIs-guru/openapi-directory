package shared

type UpdateDeviceInstanceRequest struct {
	Arn        string   `json:"arn"`
	Labels     []string `json:"labels,omitempty"`
	ProfileArn *string  `json:"profileArn,omitempty"`
}
