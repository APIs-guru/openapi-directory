package shared

type ListExportsInput struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	TableArn   *string `json:"TableArn"`
}
