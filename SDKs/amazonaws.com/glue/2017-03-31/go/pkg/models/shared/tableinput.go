package shared

import (
	"time"
)

type TableInput struct {
	Description       *string            `json:"Description"`
	LastAccessTime    *time.Time         `json:"LastAccessTime"`
	LastAnalyzedTime  *time.Time         `json:"LastAnalyzedTime"`
	Name              string             `json:"Name"`
	Owner             *string            `json:"Owner"`
	Parameters        map[string]string  `json:"Parameters"`
	PartitionKeys     []Column           `json:"PartitionKeys"`
	Retention         *int64             `json:"Retention"`
	StorageDescriptor *StorageDescriptor `json:"StorageDescriptor"`
	TableType         *string            `json:"TableType"`
	TargetTable       *TableIdentifier   `json:"TargetTable"`
	ViewExpandedText  *string            `json:"ViewExpandedText"`
	ViewOriginalText  *string            `json:"ViewOriginalText"`
}
