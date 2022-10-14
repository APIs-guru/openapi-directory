package shared

type SecurityProfileTargetMapping struct {
	SecurityProfileIdentifier *SecurityProfileIdentifier `json:"securityProfileIdentifier,omitempty"`
	Target                    *SecurityProfileTarget     `json:"target,omitempty"`
}
