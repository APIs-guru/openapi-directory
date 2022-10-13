package shared

type IotAnalyticsAction struct {
	BatchMode   *bool   `json:"batchMode"`
	ChannelArn  *string `json:"channelArn"`
	ChannelName *string `json:"channelName"`
	RoleArn     *string `json:"roleArn"`
}
