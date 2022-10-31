package shared

type UpdateLogPatternRequest struct {
	Pattern           *string `json:"Pattern,omitempty"`
	PatternName       string  `json:"PatternName"`
	PatternSetName    string  `json:"PatternSetName"`
	Rank              *int64  `json:"Rank,omitempty"`
	ResourceGroupName string  `json:"ResourceGroupName"`
}
