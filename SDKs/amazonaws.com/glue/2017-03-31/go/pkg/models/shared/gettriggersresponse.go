package shared

type GetTriggersResponse struct {
	NextToken *string   `json:"NextToken"`
	Triggers  []Trigger `json:"Triggers"`
}
