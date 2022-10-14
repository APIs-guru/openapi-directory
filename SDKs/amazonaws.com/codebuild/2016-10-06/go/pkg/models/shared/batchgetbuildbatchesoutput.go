package shared

type BatchGetBuildBatchesOutput struct {
	BuildBatches         []BuildBatch `json:"buildBatches,omitempty"`
	BuildBatchesNotFound []string     `json:"buildBatchesNotFound,omitempty"`
}
