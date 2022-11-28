package shared

// SimpleRule
// A rule that compares an input property value to a threshold value with a comparison operator.
type SimpleRule struct {
	ComparisonOperator ComparisonOperatorEnum `json:"comparisonOperator"`
	InputProperty      string                 `json:"inputProperty"`
	Threshold          string                 `json:"threshold"`
}
