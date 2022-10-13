package shared

type ValidatePolicyResponse struct {
	Findings  []ValidatePolicyFinding `json:"findings"`
	NextToken *string                 `json:"nextToken"`
}
