package shared

type SimpleRuleEvaluation struct {
	InputPropertyValue *string                 `json:"inputPropertyValue"`
	Operator           *ComparisonOperatorEnum `json:"operator"`
	ThresholdValue     *string                 `json:"thresholdValue"`
}
