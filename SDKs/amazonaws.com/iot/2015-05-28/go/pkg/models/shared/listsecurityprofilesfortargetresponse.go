package shared

type ListSecurityProfilesForTargetResponse struct {
	NextToken                     *string                        `json:"nextToken,omitempty"`
	SecurityProfileTargetMappings []SecurityProfileTargetMapping `json:"securityProfileTargetMappings,omitempty"`
}
