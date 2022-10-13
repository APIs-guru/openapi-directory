package shared

type UpdateItemInput struct {
	AttributeUpdates map[string]AttributeValueUpdate   `json:"AttributeUpdates"`
	Expected         map[string]ExpectedAttributeValue `json:"Expected"`
	Key              Key                               `json:"Key"`
	ReturnValues     *ReturnValueEnum                  `json:"ReturnValues"`
	TableName        string                            `json:"TableName"`
}
