package shared

type GetAuthorizersResponse struct {
	Items     []Authorizer `json:"Items,omitempty"`
	NextToken *string      `json:"NextToken,omitempty"`
}
