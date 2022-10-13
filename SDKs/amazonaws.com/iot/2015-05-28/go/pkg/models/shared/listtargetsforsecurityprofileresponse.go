package shared

type ListTargetsForSecurityProfileResponse struct {
	NextToken              *string                 `json:"nextToken"`
	SecurityProfileTargets []SecurityProfileTarget `json:"securityProfileTargets"`
}
