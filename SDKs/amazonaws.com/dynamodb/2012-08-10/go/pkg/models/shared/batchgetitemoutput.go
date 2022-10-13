package shared

type BatchGetItemOutput struct {
	ConsumedCapacity []ConsumedCapacity                     `json:"ConsumedCapacity"`
	Responses        map[string][]map[string]AttributeValue `json:"Responses"`
	UnprocessedKeys  map[string]KeysAndAttributes           `json:"UnprocessedKeys"`
}
