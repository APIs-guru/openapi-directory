package shared

type ListResourceServersRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	UserPoolID string  `json:"UserPoolId"`
}
