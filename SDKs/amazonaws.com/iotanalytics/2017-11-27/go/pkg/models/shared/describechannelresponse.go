package shared

type DescribeChannelResponse struct {
	Channel    *Channel           `json:"channel"`
	Statistics *ChannelStatistics `json:"statistics"`
}
