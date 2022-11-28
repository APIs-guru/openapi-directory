package shared

// DescribeFleetLocationUtilizationInput
// Represents the input for a request operation.
type DescribeFleetLocationUtilizationInput struct {
	FleetID  string `json:"FleetId"`
	Location string `json:"Location"`
}
