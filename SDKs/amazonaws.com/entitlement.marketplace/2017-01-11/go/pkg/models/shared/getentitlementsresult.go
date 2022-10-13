package shared

type GetEntitlementsResult struct {
	Entitlements []Entitlement `json:"Entitlements"`
	NextToken    *string       `json:"NextToken"`
}
