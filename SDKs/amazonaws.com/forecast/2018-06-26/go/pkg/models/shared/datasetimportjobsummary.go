package shared

import (
	"time"
)

// DatasetImportJobSummary
// Provides a summary of the dataset import job properties used in the <a>ListDatasetImportJobs</a> operation. To get the complete set of properties, call the <a>DescribeDatasetImportJob</a> operation, and provide the <code>DatasetImportJobArn</code>.
type DatasetImportJobSummary struct {
	CreationTime         *time.Time  `json:"CreationTime,omitempty"`
	DataSource           *DataSource `json:"DataSource,omitempty"`
	DatasetImportJobArn  *string     `json:"DatasetImportJobArn,omitempty"`
	DatasetImportJobName *string     `json:"DatasetImportJobName,omitempty"`
	LastModificationTime *time.Time  `json:"LastModificationTime,omitempty"`
	Message              *string     `json:"Message,omitempty"`
	Status               *string     `json:"Status,omitempty"`
}
