package shared



type TransactGetItemsInput struct {
    ReturnConsumedCapacity *ReturnConsumedCapacityEnum `json:"ReturnConsumedCapacity,omitempty"`
    TransactItems []TransactGetItem `json:"TransactItems"`
    
}

