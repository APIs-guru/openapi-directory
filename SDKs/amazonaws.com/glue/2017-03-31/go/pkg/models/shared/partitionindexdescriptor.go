package shared

// PartitionIndexDescriptor
// A descriptor for a partition index in a table.
type PartitionIndexDescriptor struct {
	BackfillErrors []BackfillError          `json:"BackfillErrors,omitempty"`
	IndexName      string                   `json:"IndexName"`
	IndexStatus    PartitionIndexStatusEnum `json:"IndexStatus"`
	Keys           []KeySchemaElement       `json:"Keys"`
}
