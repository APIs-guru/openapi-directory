package shared

type ListTriggersRequest struct {
	DependentJobName *string           `json:"DependentJobName,omitempty"`
	MaxResults       *int64            `json:"MaxResults,omitempty"`
	NextToken        *string           `json:"NextToken,omitempty"`
	Tags             map[string]string `json:"Tags,omitempty"`
}
