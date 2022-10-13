package shared

type ListUserPoolsResponse struct {
	NextToken *string                   `json:"NextToken"`
	UserPools []UserPoolDescriptionType `json:"UserPools"`
}
