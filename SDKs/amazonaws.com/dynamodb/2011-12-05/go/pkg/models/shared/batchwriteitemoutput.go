package shared

type BatchWriteItemOutput struct {
	Responses        map[string]BatchWriteResponse `json:"Responses"`
	UnprocessedItems map[string][]WriteRequest     `json:"UnprocessedItems"`
}
