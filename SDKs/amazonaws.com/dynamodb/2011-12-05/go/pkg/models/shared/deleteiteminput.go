package shared

type DeleteItemInput struct {
	Expected     map[string]ExpectedAttributeValue `json:"Expected,omitempty"`
	Key          Key                               `json:"Key"`
	ReturnValues *ReturnValueEnum                  `json:"ReturnValues,omitempty"`
	TableName    string                            `json:"TableName"`
}
