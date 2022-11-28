package shared

// DescribeTrustsRequest
// Describes the trust relationships for a particular Managed Microsoft AD directory. If no input parameters are provided, such as directory ID or trust ID, this request describes all the trust relationships.
type DescribeTrustsRequest struct {
	DirectoryID *string  `json:"DirectoryId,omitempty"`
	Limit       *int64   `json:"Limit,omitempty"`
	NextToken   *string  `json:"NextToken,omitempty"`
	TrustIds    []string `json:"TrustIds,omitempty"`
}
