package shared

type SendSerialConsoleSSHPublicKeyRequest struct {
	InstanceID   string `json:"InstanceId"`
	SSHPublicKey string `json:"SSHPublicKey"`
	SerialPort   *int64 `json:"SerialPort,omitempty"`
}
