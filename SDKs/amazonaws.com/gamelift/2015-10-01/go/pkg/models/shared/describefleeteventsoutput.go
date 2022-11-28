package shared

// DescribeFleetEventsOutput
// Represents the returned data in response to a request operation.
type DescribeFleetEventsOutput struct {
	Events    []Event `json:"Events,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
