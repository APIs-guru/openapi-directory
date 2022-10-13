package shared

type ListProtocolsListsResponse struct {
	NextToken      *string                    `json:"NextToken"`
	ProtocolsLists []ProtocolsListDataSummary `json:"ProtocolsLists"`
}
