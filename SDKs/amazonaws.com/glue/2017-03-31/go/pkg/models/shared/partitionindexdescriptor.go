package shared

type PartitionIndexDescriptor struct {
	BackfillErrors []BackfillError          `json:"BackfillErrors,omitempty"`
	IndexName      string                   `json:"IndexName"`
	IndexStatus    PartitionIndexStatusEnum `json:"IndexStatus"`
	Keys           []KeySchemaElement       `json:"Keys"`
}
