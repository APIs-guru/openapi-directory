package shared

type BatchWriteItemInput struct {
	RequestItems map[string][]WriteRequest `json:"RequestItems"`
}
