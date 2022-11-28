package shared

import (
	"time"
)

// DatasetGroupSummary
// Provides a summary of the dataset group properties used in the <a>ListDatasetGroups</a> operation. To get the complete set of properties, call the <a>DescribeDatasetGroup</a> operation, and provide the <code>DatasetGroupArn</code>.
type DatasetGroupSummary struct {
	CreationTime         *time.Time `json:"CreationTime,omitempty"`
	DatasetGroupArn      *string    `json:"DatasetGroupArn,omitempty"`
	DatasetGroupName     *string    `json:"DatasetGroupName,omitempty"`
	LastModificationTime *time.Time `json:"LastModificationTime,omitempty"`
}
