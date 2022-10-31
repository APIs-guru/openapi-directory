package shared

import (
	"time"
)

type DatasetImportJobSummary struct {
	CreationTime         *time.Time  `json:"CreationTime,omitempty"`
	DataSource           *DataSource `json:"DataSource,omitempty"`
	DatasetImportJobArn  *string     `json:"DatasetImportJobArn,omitempty"`
	DatasetImportJobName *string     `json:"DatasetImportJobName,omitempty"`
	LastModificationTime *time.Time  `json:"LastModificationTime,omitempty"`
	Message              *string     `json:"Message,omitempty"`
	Status               *string     `json:"Status,omitempty"`
}
