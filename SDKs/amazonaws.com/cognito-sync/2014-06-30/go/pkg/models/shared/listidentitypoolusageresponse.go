package shared

// ListIdentityPoolUsageResponse
// Returned for a successful ListIdentityPoolUsage request.
type ListIdentityPoolUsageResponse struct {
	Count              *int64              `json:"Count,omitempty"`
	IdentityPoolUsages []IdentityPoolUsage `json:"IdentityPoolUsages,omitempty"`
	MaxResults         *int64              `json:"MaxResults,omitempty"`
	NextToken          *string             `json:"NextToken,omitempty"`
}
