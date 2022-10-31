package shared

type ListProtocolsListsResponse struct {
	NextToken      *string                    `json:"NextToken,omitempty"`
	ProtocolsLists []ProtocolsListDataSummary `json:"ProtocolsLists,omitempty"`
}
