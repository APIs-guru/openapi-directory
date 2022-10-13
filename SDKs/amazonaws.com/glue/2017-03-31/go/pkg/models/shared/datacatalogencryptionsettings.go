package shared

type DataCatalogEncryptionSettings struct {
	ConnectionPasswordEncryption *ConnectionPasswordEncryption `json:"ConnectionPasswordEncryption"`
	EncryptionAtRest             *EncryptionAtRest             `json:"EncryptionAtRest"`
}
