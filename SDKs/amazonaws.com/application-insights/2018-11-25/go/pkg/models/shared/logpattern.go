package shared

type LogPattern struct {
	Pattern        *string `json:"Pattern,omitempty"`
	PatternName    *string `json:"PatternName,omitempty"`
	PatternSetName *string `json:"PatternSetName,omitempty"`
	Rank           *int64  `json:"Rank,omitempty"`
}
