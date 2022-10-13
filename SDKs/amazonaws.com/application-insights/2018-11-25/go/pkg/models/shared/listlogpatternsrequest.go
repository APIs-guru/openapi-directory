package shared

type ListLogPatternsRequest struct {
	MaxResults        *int64  `json:"MaxResults"`
	NextToken         *string `json:"NextToken"`
	PatternSetName    *string `json:"PatternSetName"`
	ResourceGroupName string  `json:"ResourceGroupName"`
}
