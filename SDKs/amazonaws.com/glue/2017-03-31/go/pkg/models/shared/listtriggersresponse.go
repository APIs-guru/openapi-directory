package shared

type ListTriggersResponse struct {
	NextToken    *string  `json:"NextToken"`
	TriggerNames []string `json:"TriggerNames"`
}
