package shared

// ResolveAliasOutput
// Represents the returned data in response to a request operation.
type ResolveAliasOutput struct {
	FleetArn *string `json:"FleetArn,omitempty"`
	FleetID  *string `json:"FleetId,omitempty"`
}
