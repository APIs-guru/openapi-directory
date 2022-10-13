package shared

type GetItemInput struct {
	AttributesToGet []string `json:"AttributesToGet"`
	ConsistentRead  *bool    `json:"ConsistentRead"`
	Key             Key      `json:"Key"`
	TableName       string   `json:"TableName"`
}
