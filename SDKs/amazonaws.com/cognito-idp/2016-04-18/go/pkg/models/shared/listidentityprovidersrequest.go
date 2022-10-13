package shared

type ListIdentityProvidersRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	UserPoolID string  `json:"UserPoolId"`
}
