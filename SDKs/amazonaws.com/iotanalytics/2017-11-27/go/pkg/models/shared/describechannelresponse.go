package shared

type DescribeChannelResponse struct {
	Channel    *Channel           `json:"channel,omitempty"`
	Statistics *ChannelStatistics `json:"statistics,omitempty"`
}
