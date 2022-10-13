package shared

type PutRecordBatchResponseEntry struct {
	ErrorCode    *string `json:"ErrorCode"`
	ErrorMessage *string `json:"ErrorMessage"`
	RecordID     *string `json:"RecordId"`
}
