package shared

type ListChannelsResponse struct {
	ChannelSummaries []ChannelSummary `json:"channelSummaries,omitempty"`
	NextToken        *string          `json:"nextToken,omitempty"`
}
