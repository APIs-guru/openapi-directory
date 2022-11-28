package shared

// TransactWriteItem
// A list of requests that can perform update, put, delete, or check operations on multiple items in one or more tables atomically.
type TransactWriteItem struct {
	ConditionCheck *ConditionCheck `json:"ConditionCheck,omitempty"`
	Delete         *Delete         `json:"Delete,omitempty"`
	Put            *Put            `json:"Put,omitempty"`
	Update         *Update         `json:"Update,omitempty"`
}
