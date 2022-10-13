package shared

type BatchGetTriggersResponse struct {
	Triggers         []Trigger `json:"Triggers"`
	TriggersNotFound []string  `json:"TriggersNotFound"`
}
