package shared

type FleetUtilization struct {
	ActiveGameSessionCount    *int64  `json:"ActiveGameSessionCount"`
	ActiveServerProcessCount  *int64  `json:"ActiveServerProcessCount"`
	CurrentPlayerSessionCount *int64  `json:"CurrentPlayerSessionCount"`
	FleetArn                  *string `json:"FleetArn"`
	FleetID                   *string `json:"FleetId"`
	Location                  *string `json:"Location"`
	MaximumPlayerSessionCount *int64  `json:"MaximumPlayerSessionCount"`
}
