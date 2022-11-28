package shared

// GetEntitlementsResult
// The GetEntitlementsRequest contains results from the GetEntitlements operation.
type GetEntitlementsResult struct {
	Entitlements []Entitlement `json:"Entitlements,omitempty"`
	NextToken    *string       `json:"NextToken,omitempty"`
}
