package shared

type ListCertificatesRequest struct {
	DirectoryID string  `json:"DirectoryId"`
	Limit       *int64  `json:"Limit,omitempty"`
	NextToken   *string `json:"NextToken,omitempty"`
}
