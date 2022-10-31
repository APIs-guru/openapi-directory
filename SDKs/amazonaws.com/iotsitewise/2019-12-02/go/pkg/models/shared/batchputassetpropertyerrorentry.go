package shared

type BatchPutAssetPropertyErrorEntry struct {
	EntryID string                       `json:"entryId"`
	Errors  []BatchPutAssetPropertyError `json:"errors"`
}
