package shared



type ResourceCreationLimitPolicy struct {
    NewGameSessionsPerCreator *int64 `json:"NewGameSessionsPerCreator,omitempty"`
    PolicyPeriodInMinutes *int64 `json:"PolicyPeriodInMinutes,omitempty"`
    
}

