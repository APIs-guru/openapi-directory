package shared

// BuildGroup
// Contains information about a batch build build group. Build groups are used to combine builds that can run in parallel, while still being able to set dependencies on other build groups.
type BuildGroup struct {
	CurrentBuildSummary   *BuildSummary  `json:"currentBuildSummary,omitempty"`
	DependsOn             []string       `json:"dependsOn,omitempty"`
	Identifier            *string        `json:"identifier,omitempty"`
	IgnoreFailure         *bool          `json:"ignoreFailure,omitempty"`
	PriorBuildSummaryList []BuildSummary `json:"priorBuildSummaryList,omitempty"`
}
