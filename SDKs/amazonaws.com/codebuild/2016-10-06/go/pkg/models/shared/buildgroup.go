package shared



type BuildGroup struct {
    CurrentBuildSummary *BuildSummary `json:"currentBuildSummary,omitempty"`
    DependsOn []string `json:"dependsOn,omitempty"`
    Identifier *string `json:"identifier,omitempty"`
    IgnoreFailure *bool `json:"ignoreFailure,omitempty"`
    PriorBuildSummaryList []BuildSummary `json:"priorBuildSummaryList,omitempty"`
    
}

