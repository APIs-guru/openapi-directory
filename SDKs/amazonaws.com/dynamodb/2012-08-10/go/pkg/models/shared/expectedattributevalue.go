package shared



type ExpectedAttributeValue struct {
    AttributeValueList []AttributeValue `json:"AttributeValueList,omitempty"`
    ComparisonOperator *ComparisonOperatorEnum `json:"ComparisonOperator,omitempty"`
    Exists *bool `json:"Exists,omitempty"`
    Value *AttributeValue `json:"Value,omitempty"`
    
}

