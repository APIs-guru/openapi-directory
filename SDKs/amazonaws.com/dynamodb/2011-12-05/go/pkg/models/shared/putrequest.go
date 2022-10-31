package shared

type PutRequest struct {
	Item map[string]AttributeValue `json:"Item"`
}
