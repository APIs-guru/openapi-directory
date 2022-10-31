package shared

type ConfirmConnectionResponse struct {
	ConnectionState *ConnectionStateEnum `json:"connectionState,omitempty"`
}
