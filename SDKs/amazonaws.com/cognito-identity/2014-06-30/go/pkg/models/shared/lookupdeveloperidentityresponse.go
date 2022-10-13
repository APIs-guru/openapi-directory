package shared

type LookupDeveloperIdentityResponse struct {
	DeveloperUserIdentifierList []string `json:"DeveloperUserIdentifierList"`
	IdentityID                  *string  `json:"IdentityId"`
	NextToken                   *string  `json:"NextToken"`
}
