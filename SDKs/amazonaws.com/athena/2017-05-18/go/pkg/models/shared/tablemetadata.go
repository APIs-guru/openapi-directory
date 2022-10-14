package shared

import (
	"time"
)

type TableMetadata struct {
	Columns        []Column          `json:"Columns,omitempty"`
	CreateTime     *time.Time        `json:"CreateTime,omitempty"`
	LastAccessTime *time.Time        `json:"LastAccessTime,omitempty"`
	Name           string            `json:"Name"`
	Parameters     map[string]string `json:"Parameters,omitempty"`
	PartitionKeys  []Column          `json:"PartitionKeys,omitempty"`
	TableType      *string           `json:"TableType,omitempty"`
}
