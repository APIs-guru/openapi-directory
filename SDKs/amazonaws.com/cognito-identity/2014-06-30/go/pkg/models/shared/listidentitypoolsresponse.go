package shared

type ListIdentityPoolsResponse struct {
	IdentityPools []IdentityPoolShortDescription `json:"IdentityPools"`
	NextToken     *string                        `json:"NextToken"`
}
