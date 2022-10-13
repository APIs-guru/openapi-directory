package shared

type DescribeSessionsResult struct {
	NextToken *string   `json:"NextToken"`
	Sessions  []Session `json:"Sessions"`
}
