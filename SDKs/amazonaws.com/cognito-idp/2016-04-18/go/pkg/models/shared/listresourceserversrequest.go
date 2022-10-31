package shared

type ListResourceServersRequest struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
	UserPoolID string  `json:"UserPoolId"`
}
