package shared

import (
	"time"
)

// Partition
// Represents a slice of table data.
type Partition struct {
	CatalogID         *string            `json:"CatalogId,omitempty"`
	CreationTime      *time.Time         `json:"CreationTime,omitempty"`
	DatabaseName      *string            `json:"DatabaseName,omitempty"`
	LastAccessTime    *time.Time         `json:"LastAccessTime,omitempty"`
	LastAnalyzedTime  *time.Time         `json:"LastAnalyzedTime,omitempty"`
	Parameters        map[string]string  `json:"Parameters,omitempty"`
	StorageDescriptor *StorageDescriptor `json:"StorageDescriptor,omitempty"`
	TableName         *string            `json:"TableName,omitempty"`
	Values            []string           `json:"Values,omitempty"`
}
