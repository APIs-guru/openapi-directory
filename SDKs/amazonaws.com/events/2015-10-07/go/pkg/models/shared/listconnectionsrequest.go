package shared

type ListConnectionsRequest struct {
	ConnectionState *ConnectionStateEnum `json:"ConnectionState,omitempty"`
	Limit           *int64               `json:"Limit,omitempty"`
	NamePrefix      *string              `json:"NamePrefix,omitempty"`
	NextToken       *string              `json:"NextToken,omitempty"`
}
