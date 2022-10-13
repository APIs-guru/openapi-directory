package shared

type ListTargetsResult struct {
	NextToken *string         `json:"NextToken"`
	Targets   []TargetSummary `json:"Targets"`
}
