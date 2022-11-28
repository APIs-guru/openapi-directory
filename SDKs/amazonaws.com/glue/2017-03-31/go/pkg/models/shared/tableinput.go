package shared

import (
	"time"
)

// TableInput
// A structure used to define a table.
type TableInput struct {
	Description       *string            `json:"Description,omitempty"`
	LastAccessTime    *time.Time         `json:"LastAccessTime,omitempty"`
	LastAnalyzedTime  *time.Time         `json:"LastAnalyzedTime,omitempty"`
	Name              string             `json:"Name"`
	Owner             *string            `json:"Owner,omitempty"`
	Parameters        map[string]string  `json:"Parameters,omitempty"`
	PartitionKeys     []Column           `json:"PartitionKeys,omitempty"`
	Retention         *int64             `json:"Retention,omitempty"`
	StorageDescriptor *StorageDescriptor `json:"StorageDescriptor,omitempty"`
	TableType         *string            `json:"TableType,omitempty"`
	TargetTable       *TableIdentifier   `json:"TargetTable,omitempty"`
	ViewExpandedText  *string            `json:"ViewExpandedText,omitempty"`
	ViewOriginalText  *string            `json:"ViewOriginalText,omitempty"`
}
