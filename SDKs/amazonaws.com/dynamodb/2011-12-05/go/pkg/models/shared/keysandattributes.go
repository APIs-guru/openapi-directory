package shared

type KeysAndAttributes struct {
	AttributesToGet []string `json:"AttributesToGet"`
	ConsistentRead  *bool    `json:"ConsistentRead"`
	Keys            []Key    `json:"Keys"`
}
