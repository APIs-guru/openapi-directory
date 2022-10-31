package shared

type UpdateItemInput struct {
	AttributeUpdates map[string]AttributeValueUpdate   `json:"AttributeUpdates"`
	Expected         map[string]ExpectedAttributeValue `json:"Expected,omitempty"`
	Key              Key                               `json:"Key"`
	ReturnValues     *ReturnValueEnum                  `json:"ReturnValues,omitempty"`
	TableName        string                            `json:"TableName"`
}
