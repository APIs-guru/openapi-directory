package shared

type DescribeDeliveryStreamInput struct {
	DeliveryStreamName          string  `json:"DeliveryStreamName"`
	ExclusiveStartDestinationID *string `json:"ExclusiveStartDestinationId,omitempty"`
	Limit                       *int64  `json:"Limit,omitempty"`
}
