package shared



type ListTargetsForPolicyResponse struct {
    NextMarker *string `json:"nextMarker,omitempty"`
    Targets []string `json:"targets,omitempty"`
    
}

