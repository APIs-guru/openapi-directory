package shared

// FleetUtilization
// <p>Current resource utilization statistics in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetUtilization</a> | <a>DescribeFleetLocationUtilization</a> </p>
type FleetUtilization struct {
	ActiveGameSessionCount    *int64  `json:"ActiveGameSessionCount,omitempty"`
	ActiveServerProcessCount  *int64  `json:"ActiveServerProcessCount,omitempty"`
	CurrentPlayerSessionCount *int64  `json:"CurrentPlayerSessionCount,omitempty"`
	FleetArn                  *string `json:"FleetArn,omitempty"`
	FleetID                   *string `json:"FleetId,omitempty"`
	Location                  *string `json:"Location,omitempty"`
	MaximumPlayerSessionCount *int64  `json:"MaximumPlayerSessionCount,omitempty"`
}
