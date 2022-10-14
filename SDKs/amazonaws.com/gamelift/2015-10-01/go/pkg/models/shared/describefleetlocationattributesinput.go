package shared

type DescribeFleetLocationAttributesInput struct {
	FleetID   string   `json:"FleetId"`
	Limit     *int64   `json:"Limit,omitempty"`
	Locations []string `json:"Locations,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}
