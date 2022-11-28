package shared

// LogPattern
// An object that defines the log patterns that belongs to a <code>LogPatternSet</code>.
type LogPattern struct {
	Pattern        *string `json:"Pattern,omitempty"`
	PatternName    *string `json:"PatternName,omitempty"`
	PatternSetName *string `json:"PatternSetName,omitempty"`
	Rank           *int64  `json:"Rank,omitempty"`
}
