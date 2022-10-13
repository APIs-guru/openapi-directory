package shared

type PutItemInput struct {
	Expected     map[string]ExpectedAttributeValue `json:"Expected"`
	Item         map[string]AttributeValue         `json:"Item"`
	ReturnValues *ReturnValueEnum                  `json:"ReturnValues"`
	TableName    string                            `json:"TableName"`
}
