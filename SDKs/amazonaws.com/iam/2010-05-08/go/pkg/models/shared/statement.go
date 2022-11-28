package shared

// Statement
// <p>Contains a reference to a <code>Statement</code> element in a policy document that determines the result of the simulation.</p> <p>This data type is used by the <code>MatchedStatements</code> member of the <code> <a>EvaluationResult</a> </code> type.</p>
type Statement struct {
	EndPosition      *Position
	SourcePolicyID   *string
	SourcePolicyType *PolicySourceTypeEnum
	StartPosition    *Position
}
