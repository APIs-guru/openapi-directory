package shared

type ListConnectionsOutput struct {
	Connections []Connection `json:"Connections,omitempty"`
	NextToken   *string      `json:"NextToken,omitempty"`
}
