package shared

type DeleteItemInput struct {
	Expected     map[string]ExpectedAttributeValue `json:"Expected"`
	Key          Key                               `json:"Key"`
	ReturnValues *ReturnValueEnum                  `json:"ReturnValues"`
	TableName    string                            `json:"TableName"`
}
