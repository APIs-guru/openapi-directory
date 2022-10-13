package shared

import (
	"time"
)

type DatasetGroupSummary struct {
	CreationTime         *time.Time `json:"CreationTime"`
	DatasetGroupArn      *string    `json:"DatasetGroupArn"`
	DatasetGroupName     *string    `json:"DatasetGroupName"`
	LastModificationTime *time.Time `json:"LastModificationTime"`
}
