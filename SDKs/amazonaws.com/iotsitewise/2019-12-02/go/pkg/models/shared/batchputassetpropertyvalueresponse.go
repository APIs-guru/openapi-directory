package shared

type BatchPutAssetPropertyValueResponse struct {
	ErrorEntries []BatchPutAssetPropertyErrorEntry `json:"errorEntries"`
}
