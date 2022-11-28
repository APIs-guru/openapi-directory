package shared

// SecurityProfileTargetMapping
// Information about a security profile and the target associated with it.
type SecurityProfileTargetMapping struct {
	SecurityProfileIdentifier *SecurityProfileIdentifier `json:"securityProfileIdentifier,omitempty"`
	Target                    *SecurityProfileTarget     `json:"target,omitempty"`
}
