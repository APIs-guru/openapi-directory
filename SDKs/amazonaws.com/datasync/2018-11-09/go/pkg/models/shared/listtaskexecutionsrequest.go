package shared

type ListTaskExecutionsRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	TaskArn    *string `json:"TaskArn"`
}
