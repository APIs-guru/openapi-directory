package shared

type PutDataCatalogEncryptionSettingsRequest struct {
	CatalogID                     *string                       `json:"CatalogId,omitempty"`
	DataCatalogEncryptionSettings DataCatalogEncryptionSettings `json:"DataCatalogEncryptionSettings"`
}
