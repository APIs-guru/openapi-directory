package shared

// PutRecordBatchResponseEntry
// Contains the result for an individual record from a <a>PutRecordBatch</a> request. If the record is successfully added to your delivery stream, it receives a record ID. If the record fails to be added to your delivery stream, the result includes an error code and an error message.
type PutRecordBatchResponseEntry struct {
	ErrorCode    *string `json:"ErrorCode,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
	RecordID     *string `json:"RecordId,omitempty"`
}
