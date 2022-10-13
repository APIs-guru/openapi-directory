package shared

type BatchGetBuildBatchesOutput struct {
	BuildBatches         []BuildBatch `json:"buildBatches"`
	BuildBatchesNotFound []string     `json:"buildBatchesNotFound"`
}
