package shared

// ProjectBuildBatchConfig
// Contains configuration information about a batch build project.
type ProjectBuildBatchConfig struct {
	CombineArtifacts *bool              `json:"combineArtifacts,omitempty"`
	Restrictions     *BatchRestrictions `json:"restrictions,omitempty"`
	ServiceRole      *string            `json:"serviceRole,omitempty"`
	TimeoutInMins    *int64             `json:"timeoutInMins,omitempty"`
}
