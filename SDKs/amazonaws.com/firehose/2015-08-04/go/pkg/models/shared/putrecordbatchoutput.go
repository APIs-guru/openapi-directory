package shared

type PutRecordBatchOutput struct {
	Encrypted        *bool                         `json:"Encrypted"`
	FailedPutCount   int64                         `json:"FailedPutCount"`
	RequestResponses []PutRecordBatchResponseEntry `json:"RequestResponses"`
}
