package shared

type CreateParticipantConnectionResponse struct {
	ConnectionCredentials *ConnectionCredentials `json:"ConnectionCredentials"`
	Websocket             *Websocket             `json:"Websocket"`
}
