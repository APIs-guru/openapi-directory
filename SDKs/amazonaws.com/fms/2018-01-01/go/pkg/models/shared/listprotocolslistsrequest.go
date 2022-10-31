package shared

type ListProtocolsListsRequest struct {
	DefaultLists *bool   `json:"DefaultLists,omitempty"`
	MaxResults   int64   `json:"MaxResults"`
	NextToken    *string `json:"NextToken,omitempty"`
}
