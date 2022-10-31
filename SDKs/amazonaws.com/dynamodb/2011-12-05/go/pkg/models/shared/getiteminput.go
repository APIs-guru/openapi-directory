package shared

type GetItemInput struct {
	AttributesToGet []string `json:"AttributesToGet,omitempty"`
	ConsistentRead  *bool    `json:"ConsistentRead,omitempty"`
	Key             Key      `json:"Key"`
	TableName       string   `json:"TableName"`
}
