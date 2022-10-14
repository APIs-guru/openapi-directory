package shared

import (
	"time"
)

type Table struct {
	CatalogID                     *string            `json:"CatalogId,omitempty"`
	CreateTime                    *time.Time         `json:"CreateTime,omitempty"`
	CreatedBy                     *string            `json:"CreatedBy,omitempty"`
	DatabaseName                  *string            `json:"DatabaseName,omitempty"`
	Description                   *string            `json:"Description,omitempty"`
	IsRegisteredWithLakeFormation *bool              `json:"IsRegisteredWithLakeFormation,omitempty"`
	LastAccessTime                *time.Time         `json:"LastAccessTime,omitempty"`
	LastAnalyzedTime              *time.Time         `json:"LastAnalyzedTime,omitempty"`
	Name                          string             `json:"Name"`
	Owner                         *string            `json:"Owner,omitempty"`
	Parameters                    map[string]string  `json:"Parameters,omitempty"`
	PartitionKeys                 []Column           `json:"PartitionKeys,omitempty"`
	Retention                     *int64             `json:"Retention,omitempty"`
	StorageDescriptor             *StorageDescriptor `json:"StorageDescriptor,omitempty"`
	TableType                     *string            `json:"TableType,omitempty"`
	TargetTable                   *TableIdentifier   `json:"TargetTable,omitempty"`
	UpdateTime                    *time.Time         `json:"UpdateTime,omitempty"`
	ViewExpandedText              *string            `json:"ViewExpandedText,omitempty"`
	ViewOriginalText              *string            `json:"ViewOriginalText,omitempty"`
}
