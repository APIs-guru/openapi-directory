package shared

type ListLogPatternSetsRequest struct {
	MaxResults        *int64  `json:"MaxResults"`
	NextToken         *string `json:"NextToken"`
	ResourceGroupName string  `json:"ResourceGroupName"`
}
