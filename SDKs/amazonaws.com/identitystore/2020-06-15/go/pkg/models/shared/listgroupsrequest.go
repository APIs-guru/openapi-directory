package shared

type ListGroupsRequest struct {
	Filters         []Filter `json:"Filters"`
	IdentityStoreID string   `json:"IdentityStoreId"`
	MaxResults      *int64   `json:"MaxResults"`
	NextToken       *string  `json:"NextToken"`
}
