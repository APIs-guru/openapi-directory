package shared

type ListUsersRequest struct {
	Filters         []Filter `json:"Filters"`
	IdentityStoreID string   `json:"IdentityStoreId"`
	MaxResults      *int64   `json:"MaxResults"`
	NextToken       *string  `json:"NextToken"`
}
