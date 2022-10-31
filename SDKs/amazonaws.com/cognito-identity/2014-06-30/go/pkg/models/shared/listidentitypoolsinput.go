package shared

type ListIdentityPoolsInput struct {
	MaxResults int64   `json:"MaxResults"`
	NextToken  *string `json:"NextToken,omitempty"`
}
