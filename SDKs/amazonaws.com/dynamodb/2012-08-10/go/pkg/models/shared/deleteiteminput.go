package shared

type DeleteItemInput struct {
	ConditionExpression         *string                           `json:"ConditionExpression,omitempty"`
	ConditionalOperator         *ConditionalOperatorEnum          `json:"ConditionalOperator,omitempty"`
	Expected                    map[string]ExpectedAttributeValue `json:"Expected,omitempty"`
	ExpressionAttributeNames    map[string]string                 `json:"ExpressionAttributeNames,omitempty"`
	ExpressionAttributeValues   map[string]AttributeValue         `json:"ExpressionAttributeValues,omitempty"`
	Key                         map[string]AttributeValue         `json:"Key"`
	ReturnConsumedCapacity      *ReturnConsumedCapacityEnum       `json:"ReturnConsumedCapacity,omitempty"`
	ReturnItemCollectionMetrics *ReturnItemCollectionMetricsEnum  `json:"ReturnItemCollectionMetrics,omitempty"`
	ReturnValues                *ReturnValueEnum                  `json:"ReturnValues,omitempty"`
	TableName                   string                            `json:"TableName"`
}
