package shared



type ListPoliciesResponse struct {
    NextMarker *string `json:"nextMarker,omitempty"`
    Policies []Policy `json:"policies,omitempty"`
    
}

