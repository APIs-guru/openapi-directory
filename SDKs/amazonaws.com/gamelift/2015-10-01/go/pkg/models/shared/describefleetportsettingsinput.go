package shared

// DescribeFleetPortSettingsInput
// Represents the input for a request operation.
type DescribeFleetPortSettingsInput struct {
	FleetID  string  `json:"FleetId"`
	Location *string `json:"Location,omitempty"`
}
