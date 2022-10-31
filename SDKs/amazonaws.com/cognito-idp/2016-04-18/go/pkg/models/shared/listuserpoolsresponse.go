package shared

type ListUserPoolsResponse struct {
	NextToken *string                   `json:"NextToken,omitempty"`
	UserPools []UserPoolDescriptionType `json:"UserPools,omitempty"`
}
