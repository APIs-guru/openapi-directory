package shared



type FleetUtilization struct {
    ActiveGameSessionCount *int64 `json:"ActiveGameSessionCount,omitempty"`
    ActiveServerProcessCount *int64 `json:"ActiveServerProcessCount,omitempty"`
    CurrentPlayerSessionCount *int64 `json:"CurrentPlayerSessionCount,omitempty"`
    FleetArn *string `json:"FleetArn,omitempty"`
    FleetID *string `json:"FleetId,omitempty"`
    Location *string `json:"Location,omitempty"`
    MaximumPlayerSessionCount *int64 `json:"MaximumPlayerSessionCount,omitempty"`
    
}

