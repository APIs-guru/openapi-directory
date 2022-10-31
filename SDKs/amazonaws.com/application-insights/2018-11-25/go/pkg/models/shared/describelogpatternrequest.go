package shared

type DescribeLogPatternRequest struct {
	PatternName       string `json:"PatternName"`
	PatternSetName    string `json:"PatternSetName"`
	ResourceGroupName string `json:"ResourceGroupName"`
}
