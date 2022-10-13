package shared

import (
	"time"
)

type TableMetadata struct {
	Columns        []Column          `json:"Columns"`
	CreateTime     *time.Time        `json:"CreateTime"`
	LastAccessTime *time.Time        `json:"LastAccessTime"`
	Name           string            `json:"Name"`
	Parameters     map[string]string `json:"Parameters"`
	PartitionKeys  []Column          `json:"PartitionKeys"`
	TableType      *string           `json:"TableType"`
}
