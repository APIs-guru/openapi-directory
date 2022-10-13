package shared

type CreateChannelResponse struct {
	ChannelArn      *string          `json:"channelArn"`
	ChannelName     *string          `json:"channelName"`
	RetentionPeriod *RetentionPeriod `json:"retentionPeriod"`
}
