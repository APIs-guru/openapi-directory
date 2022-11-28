package shared

// PartitionIndex
// A structure for a partition index.
type PartitionIndex struct {
	IndexName string   `json:"IndexName"`
	Keys      []string `json:"Keys"`
}
