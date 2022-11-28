package shared

// DescribeFleetLocationAttributesInput
// Represents the input for a request operation.
type DescribeFleetLocationAttributesInput struct {
	FleetID   string   `json:"FleetId"`
	Limit     *int64   `json:"Limit,omitempty"`
	Locations []string `json:"Locations,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}
