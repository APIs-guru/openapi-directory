package shared

type Condition struct {
	AttributeValueList []AttributeValue       `json:"AttributeValueList"`
	ComparisonOperator ComparisonOperatorEnum `json:"ComparisonOperator"`
}
