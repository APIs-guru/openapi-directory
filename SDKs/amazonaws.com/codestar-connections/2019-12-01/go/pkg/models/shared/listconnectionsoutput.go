package shared

type ListConnectionsOutput struct {
	Connections []Connection `json:"Connections"`
	NextToken   *string      `json:"NextToken"`
}
