package shared

type ResourceCreationLimitPolicy struct {
	NewGameSessionsPerCreator *int64 `json:"NewGameSessionsPerCreator"`
	PolicyPeriodInMinutes     *int64 `json:"PolicyPeriodInMinutes"`
}
