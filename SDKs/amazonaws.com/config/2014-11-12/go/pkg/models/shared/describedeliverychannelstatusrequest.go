package shared

// DescribeDeliveryChannelStatusRequest
// The input for the <a>DeliveryChannelStatus</a> action.
type DescribeDeliveryChannelStatusRequest struct {
	DeliveryChannelNames []string `json:"DeliveryChannelNames,omitempty"`
}
