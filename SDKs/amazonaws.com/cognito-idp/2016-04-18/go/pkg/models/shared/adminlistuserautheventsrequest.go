package shared

type AdminListUserAuthEventsRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	UserPoolID string  `json:"UserPoolId"`
	Username   string  `json:"Username"`
}
