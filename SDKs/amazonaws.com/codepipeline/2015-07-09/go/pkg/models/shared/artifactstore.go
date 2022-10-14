package shared

type ArtifactStore struct {
	EncryptionKey *EncryptionKey        `json:"encryptionKey,omitempty"`
	Location      string                `json:"location"`
	Type          ArtifactStoreTypeEnum `json:"type"`
}
