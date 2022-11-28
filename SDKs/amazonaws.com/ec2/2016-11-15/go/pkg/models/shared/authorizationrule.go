package shared

// AuthorizationRule
// Information about an authorization rule.
type AuthorizationRule struct {
	AccessAll           *bool
	ClientVpnEndpointID *string
	Description         *string
	DestinationCidr     *string
	GroupID             *string
	Status              *ClientVpnAuthorizationRuleStatus
}
