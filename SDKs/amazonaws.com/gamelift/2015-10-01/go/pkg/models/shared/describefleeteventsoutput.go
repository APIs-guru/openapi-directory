package shared

type DescribeFleetEventsOutput struct {
	Events    []Event `json:"Events,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
