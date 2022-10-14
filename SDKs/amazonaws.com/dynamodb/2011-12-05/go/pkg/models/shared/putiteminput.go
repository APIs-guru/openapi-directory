package shared

type PutItemInput struct {
	Expected     map[string]ExpectedAttributeValue `json:"Expected,omitempty"`
	Item         map[string]AttributeValue         `json:"Item"`
	ReturnValues *ReturnValueEnum                  `json:"ReturnValues,omitempty"`
	TableName    string                            `json:"TableName"`
}
