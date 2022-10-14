package shared

type IotAnalyticsAction struct {
	BatchMode   *bool   `json:"batchMode,omitempty"`
	ChannelArn  *string `json:"channelArn,omitempty"`
	ChannelName *string `json:"channelName,omitempty"`
	RoleArn     *string `json:"roleArn,omitempty"`
}
