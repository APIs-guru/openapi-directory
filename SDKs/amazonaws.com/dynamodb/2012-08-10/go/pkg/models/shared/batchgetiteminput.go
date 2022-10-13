package shared

type BatchGetItemInput struct {
	RequestItems           map[string]KeysAndAttributes `json:"RequestItems"`
	ReturnConsumedCapacity *ReturnConsumedCapacityEnum  `json:"ReturnConsumedCapacity"`
}
