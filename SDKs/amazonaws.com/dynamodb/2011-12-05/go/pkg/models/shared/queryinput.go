package shared

type QueryInput struct {
	AttributesToGet   []string       `json:"AttributesToGet"`
	ConsistentRead    *bool          `json:"ConsistentRead"`
	Count             *bool          `json:"Count"`
	ExclusiveStartKey *Key           `json:"ExclusiveStartKey"`
	HashKeyValue      AttributeValue `json:"HashKeyValue"`
	Limit             *int64         `json:"Limit"`
	RangeKeyCondition *Condition     `json:"RangeKeyCondition"`
	ScanIndexForward  *bool          `json:"ScanIndexForward"`
	TableName         string         `json:"TableName"`
}
