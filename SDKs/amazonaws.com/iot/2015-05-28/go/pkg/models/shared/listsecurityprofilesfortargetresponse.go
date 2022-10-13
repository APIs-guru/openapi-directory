package shared

type ListSecurityProfilesForTargetResponse struct {
	NextToken                     *string                        `json:"nextToken"`
	SecurityProfileTargetMappings []SecurityProfileTargetMapping `json:"securityProfileTargetMappings"`
}
