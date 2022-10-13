package shared

type Pattern struct {
	CountersToAggregate []string   `json:"countersToAggregate"`
	Description         *string    `json:"description"`
	ID                  *string    `json:"id"`
	Name                *string    `json:"name"`
	ResolutionSteps     *string    `json:"resolutionSteps"`
	TargetFrames        [][]string `json:"targetFrames"`
	ThresholdPercent    *float64   `json:"thresholdPercent"`
}
