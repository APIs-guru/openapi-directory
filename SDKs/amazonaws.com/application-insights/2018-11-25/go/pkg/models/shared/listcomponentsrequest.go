package shared

type ListComponentsRequest struct {
	MaxResults        *int64  `json:"MaxResults,omitempty"`
	NextToken         *string `json:"NextToken,omitempty"`
	ResourceGroupName string  `json:"ResourceGroupName"`
}
