package shared

type ListGroupsRequest struct {
	Filters         []Filter `json:"Filters,omitempty"`
	IdentityStoreID string   `json:"IdentityStoreId"`
	MaxResults      *int64   `json:"MaxResults,omitempty"`
	NextToken       *string  `json:"NextToken,omitempty"`
}
