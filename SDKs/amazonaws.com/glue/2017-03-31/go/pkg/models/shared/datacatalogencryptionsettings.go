package shared

// DataCatalogEncryptionSettings
// Contains configuration information for maintaining Data Catalog security.
type DataCatalogEncryptionSettings struct {
	ConnectionPasswordEncryption *ConnectionPasswordEncryption `json:"ConnectionPasswordEncryption,omitempty"`
	EncryptionAtRest             *EncryptionAtRest             `json:"EncryptionAtRest,omitempty"`
}
