package shared

type ArtifactStore struct {
	EncryptionKey *EncryptionKey        `json:"encryptionKey"`
	Location      string                `json:"location"`
	Type          ArtifactStoreTypeEnum `json:"type"`
}
