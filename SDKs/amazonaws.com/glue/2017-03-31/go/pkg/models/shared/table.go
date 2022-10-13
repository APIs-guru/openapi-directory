package shared

import (
	"time"
)

type Table struct {
	CatalogID                     *string            `json:"CatalogId"`
	CreateTime                    *time.Time         `json:"CreateTime"`
	CreatedBy                     *string            `json:"CreatedBy"`
	DatabaseName                  *string            `json:"DatabaseName"`
	Description                   *string            `json:"Description"`
	IsRegisteredWithLakeFormation *bool              `json:"IsRegisteredWithLakeFormation"`
	LastAccessTime                *time.Time         `json:"LastAccessTime"`
	LastAnalyzedTime              *time.Time         `json:"LastAnalyzedTime"`
	Name                          string             `json:"Name"`
	Owner                         *string            `json:"Owner"`
	Parameters                    map[string]string  `json:"Parameters"`
	PartitionKeys                 []Column           `json:"PartitionKeys"`
	Retention                     *int64             `json:"Retention"`
	StorageDescriptor             *StorageDescriptor `json:"StorageDescriptor"`
	TableType                     *string            `json:"TableType"`
	TargetTable                   *TableIdentifier   `json:"TargetTable"`
	UpdateTime                    *time.Time         `json:"UpdateTime"`
	ViewExpandedText              *string            `json:"ViewExpandedText"`
	ViewOriginalText              *string            `json:"ViewOriginalText"`
}
