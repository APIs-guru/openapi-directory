package shared

type SelectResourceConfigResponse struct {
	NextToken *string    `json:"NextToken"`
	QueryInfo *QueryInfo `json:"QueryInfo"`
	Results   []string   `json:"Results"`
}
