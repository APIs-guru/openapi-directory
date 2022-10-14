package shared

type ListHsmsResponse struct {
	HsmList   []string `json:"HsmList,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}
