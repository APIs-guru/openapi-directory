package shared

type GetItemOutput struct {
	ConsumedCapacity *ConsumedCapacity         `json:"ConsumedCapacity"`
	Item             map[string]AttributeValue `json:"Item"`
}
