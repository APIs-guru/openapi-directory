package shared

type ListIdentityPoolUsageResponse struct {
	Count              *int64              `json:"Count"`
	IdentityPoolUsages []IdentityPoolUsage `json:"IdentityPoolUsages"`
	MaxResults         *int64              `json:"MaxResults"`
	NextToken          *string             `json:"NextToken"`
}
