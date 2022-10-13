package shared

type PutDataCatalogEncryptionSettingsRequest struct {
	CatalogID                     *string                       `json:"CatalogId"`
	DataCatalogEncryptionSettings DataCatalogEncryptionSettings `json:"DataCatalogEncryptionSettings"`
}
