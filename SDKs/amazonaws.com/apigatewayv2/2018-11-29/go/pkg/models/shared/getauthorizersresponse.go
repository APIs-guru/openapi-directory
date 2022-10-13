package shared

type GetAuthorizersResponse struct {
	Items     []Authorizer `json:"Items"`
	NextToken *string      `json:"NextToken"`
}
