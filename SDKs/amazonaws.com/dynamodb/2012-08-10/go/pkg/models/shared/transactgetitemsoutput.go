package shared

type TransactGetItemsOutput struct {
	ConsumedCapacity []ConsumedCapacity `json:"ConsumedCapacity"`
	Responses        []ItemResponse     `json:"Responses"`
}
