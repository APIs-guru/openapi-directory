package shared

import (
	"time"
)

type Partition struct {
	CatalogID         *string            `json:"CatalogId"`
	CreationTime      *time.Time         `json:"CreationTime"`
	DatabaseName      *string            `json:"DatabaseName"`
	LastAccessTime    *time.Time         `json:"LastAccessTime"`
	LastAnalyzedTime  *time.Time         `json:"LastAnalyzedTime"`
	Parameters        map[string]string  `json:"Parameters"`
	StorageDescriptor *StorageDescriptor `json:"StorageDescriptor"`
	TableName         *string            `json:"TableName"`
	Values            []string           `json:"Values"`
}
