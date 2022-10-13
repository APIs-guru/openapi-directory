package shared

type DeleteItemInput struct {
	ConditionExpression         *string                           `json:"ConditionExpression"`
	ConditionalOperator         *ConditionalOperatorEnum          `json:"ConditionalOperator"`
	Expected                    map[string]ExpectedAttributeValue `json:"Expected"`
	ExpressionAttributeNames    map[string]string                 `json:"ExpressionAttributeNames"`
	ExpressionAttributeValues   map[string]AttributeValue         `json:"ExpressionAttributeValues"`
	Key                         map[string]AttributeValue         `json:"Key"`
	ReturnConsumedCapacity      *ReturnConsumedCapacityEnum       `json:"ReturnConsumedCapacity"`
	ReturnItemCollectionMetrics *ReturnItemCollectionMetricsEnum  `json:"ReturnItemCollectionMetrics"`
	ReturnValues                *ReturnValueEnum                  `json:"ReturnValues"`
	TableName                   string                            `json:"TableName"`
}
