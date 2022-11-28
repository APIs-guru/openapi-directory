package shared

// DescribeDeliveryChannelStatusResponse
// The output for the <a>DescribeDeliveryChannelStatus</a> action.
type DescribeDeliveryChannelStatusResponse struct {
	DeliveryChannelsStatus []DeliveryChannelStatus `json:"DeliveryChannelsStatus,omitempty"`
}
