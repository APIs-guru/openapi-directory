package shared



type ListAttachedPoliciesResponse struct {
    NextMarker *string `json:"nextMarker,omitempty"`
    Policies []Policy `json:"policies,omitempty"`
    
}

