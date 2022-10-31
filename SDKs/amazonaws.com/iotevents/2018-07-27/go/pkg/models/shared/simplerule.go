package shared

type SimpleRule struct {
	ComparisonOperator ComparisonOperatorEnum `json:"comparisonOperator"`
	InputProperty      string                 `json:"inputProperty"`
	Threshold          string                 `json:"threshold"`
}
