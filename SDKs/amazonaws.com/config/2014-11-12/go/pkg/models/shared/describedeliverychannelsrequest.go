package shared

// DescribeDeliveryChannelsRequest
// The input for the <a>DescribeDeliveryChannels</a> action.
type DescribeDeliveryChannelsRequest struct {
	DeliveryChannelNames []string `json:"DeliveryChannelNames,omitempty"`
}
