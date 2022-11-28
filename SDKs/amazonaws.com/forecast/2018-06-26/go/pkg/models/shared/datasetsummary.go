package shared

import (
	"time"
)

// DatasetSummary
// Provides a summary of the dataset properties used in the <a>ListDatasets</a> operation. To get the complete set of properties, call the <a>DescribeDataset</a> operation, and provide the <code>DatasetArn</code>.
type DatasetSummary struct {
	CreationTime         *time.Time       `json:"CreationTime,omitempty"`
	DatasetArn           *string          `json:"DatasetArn,omitempty"`
	DatasetName          *string          `json:"DatasetName,omitempty"`
	DatasetType          *DatasetTypeEnum `json:"DatasetType,omitempty"`
	Domain               *DomainEnum      `json:"Domain,omitempty"`
	LastModificationTime *time.Time       `json:"LastModificationTime,omitempty"`
}
