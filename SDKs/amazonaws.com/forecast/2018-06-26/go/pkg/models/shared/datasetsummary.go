package shared

import (
	"time"
)

type DatasetSummary struct {
	CreationTime         *time.Time       `json:"CreationTime"`
	DatasetArn           *string          `json:"DatasetArn"`
	DatasetName          *string          `json:"DatasetName"`
	DatasetType          *DatasetTypeEnum `json:"DatasetType"`
	Domain               *DomainEnum      `json:"Domain"`
	LastModificationTime *time.Time       `json:"LastModificationTime"`
}
