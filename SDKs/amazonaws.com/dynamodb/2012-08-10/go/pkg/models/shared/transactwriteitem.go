package shared

type TransactWriteItem struct {
	ConditionCheck *ConditionCheck `json:"ConditionCheck"`
	Delete         *Delete         `json:"Delete"`
	Put            *Put            `json:"Put"`
	Update         *Update         `json:"Update"`
}
