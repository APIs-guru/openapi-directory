package shared

type SimpleRuleEvaluation struct {
	InputPropertyValue *string                 `json:"inputPropertyValue,omitempty"`
	Operator           *ComparisonOperatorEnum `json:"operator,omitempty"`
	ThresholdValue     *string                 `json:"thresholdValue,omitempty"`
}
