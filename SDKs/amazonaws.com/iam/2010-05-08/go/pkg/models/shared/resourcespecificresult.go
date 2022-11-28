package shared

// ResourceSpecificResult
// <p>Contains the result of the simulation of a single API operation call on a single resource.</p> <p>This data type is used by a member of the <a>EvaluationResult</a> data type.</p>
type ResourceSpecificResult struct {
	EvalDecisionDetails               map[string]PolicyEvaluationDecisionTypeEnum
	EvalResourceDecision              PolicyEvaluationDecisionTypeEnum
	EvalResourceName                  string
	MatchedStatements                 []Statement
	MissingContextValues              []string
	PermissionsBoundaryDecisionDetail *PermissionsBoundaryDecisionDetail
}
