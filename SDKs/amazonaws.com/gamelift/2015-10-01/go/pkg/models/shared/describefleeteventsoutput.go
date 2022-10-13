package shared

type DescribeFleetEventsOutput struct {
	Events    []Event `json:"Events"`
	NextToken *string `json:"NextToken"`
}
