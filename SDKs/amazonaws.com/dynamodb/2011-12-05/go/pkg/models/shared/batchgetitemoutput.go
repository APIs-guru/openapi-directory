package shared

type BatchGetItemOutput struct {
	Responses       map[string]BatchResponse     `json:"Responses,omitempty"`
	UnprocessedKeys map[string]KeysAndAttributes `json:"UnprocessedKeys,omitempty"`
}
