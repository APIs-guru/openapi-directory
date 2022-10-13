package shared

type ProjectBuildBatchConfig struct {
	CombineArtifacts *bool              `json:"combineArtifacts"`
	Restrictions     *BatchRestrictions `json:"restrictions"`
	ServiceRole      *string            `json:"serviceRole"`
	TimeoutInMins    *int64             `json:"timeoutInMins"`
}
