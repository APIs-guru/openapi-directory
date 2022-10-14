package shared

type ListJobsRequest struct {
	MaxResults *int64            `json:"MaxResults,omitempty"`
	NextToken  *string           `json:"NextToken,omitempty"`
	Tags       map[string]string `json:"Tags,omitempty"`
}
