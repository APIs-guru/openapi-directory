package shared

// ListIdentityPoolsInput
// Input to the ListIdentityPools action.
type ListIdentityPoolsInput struct {
	MaxResults int64   `json:"MaxResults"`
	NextToken  *string `json:"NextToken,omitempty"`
}
