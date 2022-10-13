package shared

type EncryptionKey struct {
	ID   string                `json:"id"`
	Type EncryptionKeyTypeEnum `json:"type"`
}
