package shared

type ListApplicationsRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
