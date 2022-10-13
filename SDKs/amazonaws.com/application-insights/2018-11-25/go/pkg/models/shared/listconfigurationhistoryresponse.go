package shared

type ListConfigurationHistoryResponse struct {
	EventList []ConfigurationEvent `json:"EventList"`
	NextToken *string              `json:"NextToken"`
}
