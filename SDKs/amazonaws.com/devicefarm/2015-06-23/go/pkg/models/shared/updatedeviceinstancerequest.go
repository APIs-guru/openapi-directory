package shared

type UpdateDeviceInstanceRequest struct {
	Arn        string   `json:"arn"`
	Labels     []string `json:"labels"`
	ProfileArn *string  `json:"profileArn"`
}
