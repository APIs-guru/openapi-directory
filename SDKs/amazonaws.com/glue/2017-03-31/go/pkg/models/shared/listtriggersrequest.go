package shared

type ListTriggersRequest struct {
	DependentJobName *string           `json:"DependentJobName"`
	MaxResults       *int64            `json:"MaxResults"`
	NextToken        *string           `json:"NextToken"`
	Tags             map[string]string `json:"Tags"`
}
