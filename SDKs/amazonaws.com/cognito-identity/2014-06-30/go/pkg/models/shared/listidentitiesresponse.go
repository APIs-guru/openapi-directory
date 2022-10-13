package shared

type ListIdentitiesResponse struct {
	Identities     []IdentityDescription `json:"Identities"`
	IdentityPoolID *string               `json:"IdentityPoolId"`
	NextToken      *string               `json:"NextToken"`
}
