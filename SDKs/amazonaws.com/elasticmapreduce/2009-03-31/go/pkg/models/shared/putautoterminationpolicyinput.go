package shared



type PutAutoTerminationPolicyInput struct {
    AutoTerminationPolicy *AutoTerminationPolicy `json:"AutoTerminationPolicy,omitempty"`
    ClusterID string `json:"ClusterId"`
    
}

