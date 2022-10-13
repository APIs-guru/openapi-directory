package shared

type BuildGroup struct {
	CurrentBuildSummary   *BuildSummary  `json:"currentBuildSummary"`
	DependsOn             []string       `json:"dependsOn"`
	Identifier            *string        `json:"identifier"`
	IgnoreFailure         *bool          `json:"ignoreFailure"`
	PriorBuildSummaryList []BuildSummary `json:"priorBuildSummaryList"`
}
