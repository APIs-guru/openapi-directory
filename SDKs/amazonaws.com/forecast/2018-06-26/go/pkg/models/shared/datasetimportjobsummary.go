package shared

import (
	"time"
)

type DatasetImportJobSummary struct {
	CreationTime         *time.Time  `json:"CreationTime"`
	DataSource           *DataSource `json:"DataSource"`
	DatasetImportJobArn  *string     `json:"DatasetImportJobArn"`
	DatasetImportJobName *string     `json:"DatasetImportJobName"`
	LastModificationTime *time.Time  `json:"LastModificationTime"`
	Message              *string     `json:"Message"`
	Status               *string     `json:"Status"`
}
