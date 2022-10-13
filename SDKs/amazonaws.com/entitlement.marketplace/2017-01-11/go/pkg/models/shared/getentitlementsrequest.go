package shared

type GetEntitlementsRequest struct {
	Filter      map[string][]string `json:"Filter"`
	MaxResults  *int64              `json:"MaxResults"`
	NextToken   *string             `json:"NextToken"`
	ProductCode string              `json:"ProductCode"`
}
