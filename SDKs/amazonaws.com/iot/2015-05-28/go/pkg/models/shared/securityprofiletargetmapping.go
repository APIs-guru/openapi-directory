package shared

type SecurityProfileTargetMapping struct {
	SecurityProfileIdentifier *SecurityProfileIdentifier `json:"securityProfileIdentifier"`
	Target                    *SecurityProfileTarget     `json:"target"`
}
