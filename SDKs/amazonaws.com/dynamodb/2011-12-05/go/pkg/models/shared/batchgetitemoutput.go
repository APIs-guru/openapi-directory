package shared

type BatchGetItemOutput struct {
	Responses       map[string]BatchResponse     `json:"Responses"`
	UnprocessedKeys map[string]KeysAndAttributes `json:"UnprocessedKeys"`
}
