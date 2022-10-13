package shared

type DescribeTrustsRequest struct {
	DirectoryID *string  `json:"DirectoryId"`
	Limit       *int64   `json:"Limit"`
	NextToken   *string  `json:"NextToken"`
	TrustIds    []string `json:"TrustIds"`
}
