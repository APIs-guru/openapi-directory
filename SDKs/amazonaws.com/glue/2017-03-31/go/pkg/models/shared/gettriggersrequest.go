package shared

type GetTriggersRequest struct {
	DependentJobName *string `json:"DependentJobName"`
	MaxResults       *int64  `json:"MaxResults"`
	NextToken        *string `json:"NextToken"`
}
