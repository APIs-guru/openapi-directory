package shared

type GetConnectionsRequest struct {
	CatalogID    *string               `json:"CatalogId"`
	Filter       *GetConnectionsFilter `json:"Filter"`
	HidePassword *bool                 `json:"HidePassword"`
	MaxResults   *int64                `json:"MaxResults"`
	NextToken    *string               `json:"NextToken"`
}
