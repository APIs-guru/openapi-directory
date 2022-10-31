package shared

type GetConnectionsResponse struct {
	ConnectionList []Connection `json:"ConnectionList,omitempty"`
	NextToken      *string      `json:"NextToken,omitempty"`
}
