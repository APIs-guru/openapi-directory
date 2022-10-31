package shared

type DescribeFleetUtilizationInput struct {
	FleetIds  []string `json:"FleetIds,omitempty"`
	Limit     *int64   `json:"Limit,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}
