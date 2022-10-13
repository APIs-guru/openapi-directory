package shared

type GetConnectionsResponse struct {
	ConnectionList []Connection `json:"ConnectionList"`
	NextToken      *string      `json:"NextToken"`
}
