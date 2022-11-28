package shared

// SimpleRuleEvaluation
// Information needed to compare two values with a comparison operator.
type SimpleRuleEvaluation struct {
	InputPropertyValue *string                 `json:"inputPropertyValue,omitempty"`
	Operator           *ComparisonOperatorEnum `json:"operator,omitempty"`
	ThresholdValue     *string                 `json:"thresholdValue,omitempty"`
}
