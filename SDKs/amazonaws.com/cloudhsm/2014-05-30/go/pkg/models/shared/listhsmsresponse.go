package shared

// ListHsmsResponse
// Contains the output of the <code>ListHsms</code> operation.
type ListHsmsResponse struct {
	HsmList   []string `json:"HsmList,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}
