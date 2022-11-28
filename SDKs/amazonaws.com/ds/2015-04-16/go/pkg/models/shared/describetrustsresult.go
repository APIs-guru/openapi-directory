package shared

// DescribeTrustsResult
// The result of a DescribeTrust request.
type DescribeTrustsResult struct {
	NextToken *string `json:"NextToken,omitempty"`
	Trusts    []Trust `json:"Trusts,omitempty"`
}
