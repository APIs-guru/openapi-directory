package shared



type FargateProfileSelector struct {
    Labels map[string]string `json:"labels,omitempty"`
    Namespace *string `json:"namespace,omitempty"`
    
}

