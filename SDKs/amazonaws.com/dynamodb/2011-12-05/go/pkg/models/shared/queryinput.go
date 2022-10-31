package shared



type QueryInput struct {
    AttributesToGet []string `json:"AttributesToGet,omitempty"`
    ConsistentRead *bool `json:"ConsistentRead,omitempty"`
    Count *bool `json:"Count,omitempty"`
    ExclusiveStartKey *Key `json:"ExclusiveStartKey,omitempty"`
    HashKeyValue AttributeValue `json:"HashKeyValue"`
    Limit *int64 `json:"Limit,omitempty"`
    RangeKeyCondition *Condition `json:"RangeKeyCondition,omitempty"`
    ScanIndexForward *bool `json:"ScanIndexForward,omitempty"`
    TableName string `json:"TableName"`
    
}

