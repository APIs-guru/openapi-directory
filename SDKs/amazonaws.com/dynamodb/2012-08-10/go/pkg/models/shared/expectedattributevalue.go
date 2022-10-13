package shared

type ExpectedAttributeValue struct {
	AttributeValueList []AttributeValue        `json:"AttributeValueList"`
	ComparisonOperator *ComparisonOperatorEnum `json:"ComparisonOperator"`
	Exists             *bool                   `json:"Exists"`
	Value              *AttributeValue         `json:"Value"`
}
