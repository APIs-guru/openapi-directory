package shared



type ListPrincipalPoliciesResponse struct {
    NextMarker *string `json:"nextMarker,omitempty"`
    Policies []Policy `json:"policies,omitempty"`
    
}

