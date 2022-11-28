package shared

// ListUserPoolsResponse
// Represents the response to list user pools.
type ListUserPoolsResponse struct {
	NextToken *string                   `json:"NextToken,omitempty"`
	UserPools []UserPoolDescriptionType `json:"UserPools,omitempty"`
}
