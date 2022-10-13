package shared

type DescribeFleetLocationAttributesInput struct {
	FleetID   string   `json:"FleetId"`
	Limit     *int64   `json:"Limit"`
	Locations []string `json:"Locations"`
	NextToken *string  `json:"NextToken"`
}
