package shared

type ListConnectionsResponse struct {
	Connections []Connection `json:"Connections"`
	NextToken   *string      `json:"NextToken"`
}
