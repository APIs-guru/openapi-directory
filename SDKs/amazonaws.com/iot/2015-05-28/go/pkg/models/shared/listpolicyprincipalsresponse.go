package shared



type ListPolicyPrincipalsResponse struct {
    NextMarker *string `json:"nextMarker,omitempty"`
    Principals []string `json:"principals,omitempty"`
    
}

