package shared



type CreateChannelResponse struct {
    ChannelArn *string `json:"channelArn,omitempty"`
    ChannelName *string `json:"channelName,omitempty"`
    RetentionPeriod *RetentionPeriod `json:"retentionPeriod,omitempty"`
    
}

