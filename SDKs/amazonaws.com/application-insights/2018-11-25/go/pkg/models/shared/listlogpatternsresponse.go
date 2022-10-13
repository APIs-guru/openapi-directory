package shared

type ListLogPatternsResponse struct {
	LogPatterns       []LogPattern `json:"LogPatterns"`
	NextToken         *string      `json:"NextToken"`
	ResourceGroupName *string      `json:"ResourceGroupName"`
}
