package shared

type ListLogPatternSetsResponse struct {
	LogPatternSets    []string `json:"LogPatternSets"`
	NextToken         *string  `json:"NextToken"`
	ResourceGroupName *string  `json:"ResourceGroupName"`
}
