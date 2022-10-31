package shared

type SelectAggregateResourceConfigResponse struct {
	NextToken *string    `json:"NextToken,omitempty"`
	QueryInfo *QueryInfo `json:"QueryInfo,omitempty"`
	Results   []string   `json:"Results,omitempty"`
}
