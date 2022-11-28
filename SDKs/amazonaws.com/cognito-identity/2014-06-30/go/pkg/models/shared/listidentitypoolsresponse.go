package shared

// ListIdentityPoolsResponse
// The result of a successful ListIdentityPools action.
type ListIdentityPoolsResponse struct {
	IdentityPools []IdentityPoolShortDescription `json:"IdentityPools,omitempty"`
	NextToken     *string                        `json:"NextToken,omitempty"`
}
