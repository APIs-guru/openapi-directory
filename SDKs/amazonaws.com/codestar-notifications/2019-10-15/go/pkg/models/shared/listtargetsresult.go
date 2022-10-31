package shared

type ListTargetsResult struct {
	NextToken *string         `json:"NextToken,omitempty"`
	Targets   []TargetSummary `json:"Targets,omitempty"`
}
