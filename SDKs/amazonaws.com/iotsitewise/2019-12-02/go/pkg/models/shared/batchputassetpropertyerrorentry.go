package shared

// BatchPutAssetPropertyErrorEntry
// Contains error information for asset property value entries that are associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API.
type BatchPutAssetPropertyErrorEntry struct {
	EntryID string                       `json:"entryId"`
	Errors  []BatchPutAssetPropertyError `json:"errors"`
}
