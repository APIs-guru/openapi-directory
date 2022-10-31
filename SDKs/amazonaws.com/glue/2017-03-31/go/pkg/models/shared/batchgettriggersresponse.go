package shared

type BatchGetTriggersResponse struct {
	Triggers         []Trigger `json:"Triggers,omitempty"`
	TriggersNotFound []string  `json:"TriggersNotFound,omitempty"`
}
