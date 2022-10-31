package shared

type DescribeEventsResponse struct {
	Events    []Event `json:"Events,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
