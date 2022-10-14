package shared

type LookupDeveloperIdentityResponse struct {
	DeveloperUserIdentifierList []string `json:"DeveloperUserIdentifierList,omitempty"`
	IdentityID                  *string  `json:"IdentityId,omitempty"`
	NextToken                   *string  `json:"NextToken,omitempty"`
}
