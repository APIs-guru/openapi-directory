package shared

// LookupDeveloperIdentityResponse
// Returned in response to a successful <code>LookupDeveloperIdentity</code> action.
type LookupDeveloperIdentityResponse struct {
	DeveloperUserIdentifierList []string `json:"DeveloperUserIdentifierList,omitempty"`
	IdentityID                  *string  `json:"IdentityId,omitempty"`
	NextToken                   *string  `json:"NextToken,omitempty"`
}
