package shared

type ListChannelsResponse struct {
	ChannelSummaries []ChannelSummary `json:"channelSummaries"`
	NextToken        *string          `json:"nextToken"`
}
