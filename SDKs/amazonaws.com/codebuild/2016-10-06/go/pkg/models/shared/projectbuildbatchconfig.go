package shared



type ProjectBuildBatchConfig struct {
    CombineArtifacts *bool `json:"combineArtifacts,omitempty"`
    Restrictions *BatchRestrictions `json:"restrictions,omitempty"`
    ServiceRole *string `json:"serviceRole,omitempty"`
    TimeoutInMins *int64 `json:"timeoutInMins,omitempty"`
    
}

