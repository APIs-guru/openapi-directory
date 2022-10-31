package shared

type ListConfigurationHistoryResponse struct {
	EventList []ConfigurationEvent `json:"EventList,omitempty"`
	NextToken *string              `json:"NextToken,omitempty"`
}
