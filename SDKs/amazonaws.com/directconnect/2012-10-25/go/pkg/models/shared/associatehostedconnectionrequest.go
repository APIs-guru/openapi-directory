package shared

type AssociateHostedConnectionRequest struct {
	ConnectionID       string `json:"connectionId"`
	ParentConnectionID string `json:"parentConnectionId"`
}
