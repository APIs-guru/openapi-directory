package shared

type CreateParticipantConnectionResponse struct {
	ConnectionCredentials *ConnectionCredentials `json:"ConnectionCredentials,omitempty"`
	Websocket             *Websocket             `json:"Websocket,omitempty"`
}
