package shared

type BatchPutMessageResponse struct {
	BatchPutMessageErrorEntries []BatchPutMessageErrorEntry `json:"batchPutMessageErrorEntries"`
}
