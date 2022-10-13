package shared

type ListConnectionsRequest struct {
	ConnectionState *ConnectionStateEnum `json:"ConnectionState"`
	Limit           *int64               `json:"Limit"`
	NamePrefix      *string              `json:"NamePrefix"`
	NextToken       *string              `json:"NextToken"`
}
