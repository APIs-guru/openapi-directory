package shared

type ListComponentsRequest struct {
	MaxResults        *int64  `json:"MaxResults"`
	NextToken         *string `json:"NextToken"`
	ResourceGroupName string  `json:"ResourceGroupName"`
}
