package shared

type TransactGetItemsInput struct {
	ReturnConsumedCapacity *ReturnConsumedCapacityEnum `json:"ReturnConsumedCapacity"`
	TransactItems          []TransactGetItem           `json:"TransactItems"`
}
