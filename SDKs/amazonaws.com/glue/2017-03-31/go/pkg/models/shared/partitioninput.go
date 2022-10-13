package shared

import (
	"time"
)

type PartitionInput struct {
	LastAccessTime    *time.Time         `json:"LastAccessTime"`
	LastAnalyzedTime  *time.Time         `json:"LastAnalyzedTime"`
	Parameters        map[string]string  `json:"Parameters"`
	StorageDescriptor *StorageDescriptor `json:"StorageDescriptor"`
	Values            []string           `json:"Values"`
}
