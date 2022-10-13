package shared

type ListSecurityProfilesResponse struct {
	NextToken                  *string                     `json:"nextToken"`
	SecurityProfileIdentifiers []SecurityProfileIdentifier `json:"securityProfileIdentifiers"`
}
