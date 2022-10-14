package shared

type Condition struct {
	AttributeValueList []AttributeValue       `json:"AttributeValueList,omitempty"`
	ComparisonOperator ComparisonOperatorEnum `json:"ComparisonOperator"`
}
