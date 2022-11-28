package shared

type PolicyEvaluationDecisionTypeEnum string

const (
	PolicyEvaluationDecisionTypeEnumAllowed      PolicyEvaluationDecisionTypeEnum = "allowed"
	PolicyEvaluationDecisionTypeEnumExplicitDeny PolicyEvaluationDecisionTypeEnum = "explicitDeny"
	PolicyEvaluationDecisionTypeEnumImplicitDeny PolicyEvaluationDecisionTypeEnum = "implicitDeny"
)
