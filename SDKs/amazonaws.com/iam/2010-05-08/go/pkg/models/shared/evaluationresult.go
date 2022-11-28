package shared

// EvaluationResult
// <p>Contains the results of a simulation.</p> <p>This data type is used by the return parameter of <code> <a>SimulateCustomPolicy</a> </code> and <code> <a>SimulatePrincipalPolicy</a> </code>.</p>
type EvaluationResult struct {
	EvalActionName                    string
	EvalDecision                      PolicyEvaluationDecisionTypeEnum
	EvalDecisionDetails               map[string]PolicyEvaluationDecisionTypeEnum
	EvalResourceName                  *string
	MatchedStatements                 []Statement
	MissingContextValues              []string
	OrganizationsDecisionDetail       *OrganizationsDecisionDetail
	PermissionsBoundaryDecisionDetail *PermissionsBoundaryDecisionDetail
	ResourceSpecificResults           []ResourceSpecificResult
}
