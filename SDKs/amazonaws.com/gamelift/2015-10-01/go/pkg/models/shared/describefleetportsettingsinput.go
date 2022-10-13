package shared

type DescribeFleetPortSettingsInput struct {
	FleetID  string  `json:"FleetId"`
	Location *string `json:"Location"`
}
