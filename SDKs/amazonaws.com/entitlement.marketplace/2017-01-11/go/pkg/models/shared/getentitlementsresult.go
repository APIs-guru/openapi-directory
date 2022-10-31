package shared



type GetEntitlementsResult struct {
    Entitlements []Entitlement `json:"Entitlements,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

