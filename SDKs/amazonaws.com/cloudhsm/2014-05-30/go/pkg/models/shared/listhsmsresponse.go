package shared

type ListHsmsResponse struct {
	HsmList   []string `json:"HsmList"`
	NextToken *string  `json:"NextToken"`
}
