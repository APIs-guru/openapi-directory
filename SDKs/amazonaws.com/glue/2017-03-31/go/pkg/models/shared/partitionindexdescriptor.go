package shared

type PartitionIndexDescriptor struct {
	BackfillErrors []BackfillError          `json:"BackfillErrors"`
	IndexName      string                   `json:"IndexName"`
	IndexStatus    PartitionIndexStatusEnum `json:"IndexStatus"`
	Keys           []KeySchemaElement       `json:"Keys"`
}
