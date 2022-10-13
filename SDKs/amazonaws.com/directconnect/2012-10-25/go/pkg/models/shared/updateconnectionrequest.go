package shared

type UpdateConnectionRequest struct {
	ConnectionID   string  `json:"connectionId"`
	ConnectionName *string `json:"connectionName"`
	EncryptionMode *string `json:"encryptionMode"`
}
