package shared

type ListSecurityProfilesResponse struct {
	NextToken                  *string                     `json:"nextToken,omitempty"`
	SecurityProfileIdentifiers []SecurityProfileIdentifier `json:"securityProfileIdentifiers,omitempty"`
}
