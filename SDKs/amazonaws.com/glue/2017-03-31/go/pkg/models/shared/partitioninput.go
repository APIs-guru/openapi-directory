package shared

import (
	"time"
)

// PartitionInput
// The structure used to create and update a partition.
type PartitionInput struct {
	LastAccessTime    *time.Time         `json:"LastAccessTime,omitempty"`
	LastAnalyzedTime  *time.Time         `json:"LastAnalyzedTime,omitempty"`
	Parameters        map[string]string  `json:"Parameters,omitempty"`
	StorageDescriptor *StorageDescriptor `json:"StorageDescriptor,omitempty"`
	Values            []string           `json:"Values,omitempty"`
}
