package shared

type ListProtocolsListsRequest struct {
	DefaultLists *bool   `json:"DefaultLists"`
	MaxResults   int64   `json:"MaxResults"`
	NextToken    *string `json:"NextToken"`
}
