package shared

type GetTriggersRequest struct {
	DependentJobName *string `json:"DependentJobName,omitempty"`
	MaxResults       *int64  `json:"MaxResults,omitempty"`
	NextToken        *string `json:"NextToken,omitempty"`
}
