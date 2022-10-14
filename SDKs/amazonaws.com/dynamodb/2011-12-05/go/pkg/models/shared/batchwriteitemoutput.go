package shared

type BatchWriteItemOutput struct {
	Responses        map[string]BatchWriteResponse `json:"Responses,omitempty"`
	UnprocessedItems map[string][]WriteRequest     `json:"UnprocessedItems,omitempty"`
}
