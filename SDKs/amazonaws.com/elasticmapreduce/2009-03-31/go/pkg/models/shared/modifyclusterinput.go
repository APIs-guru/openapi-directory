package shared



type ModifyClusterInput struct {
    ClusterID string `json:"ClusterId"`
    StepConcurrencyLevel *int64 `json:"StepConcurrencyLevel,omitempty"`
    
}

