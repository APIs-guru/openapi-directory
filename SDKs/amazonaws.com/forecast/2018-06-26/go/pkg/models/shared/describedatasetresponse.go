package shared

import (
	"time"
)

type DescribeDatasetResponse struct {
	CreationTime         *time.Time        `json:"CreationTime"`
	DataFrequency        *string           `json:"DataFrequency"`
	DatasetArn           *string           `json:"DatasetArn"`
	DatasetName          *string           `json:"DatasetName"`
	DatasetType          *DatasetTypeEnum  `json:"DatasetType"`
	Domain               *DomainEnum       `json:"Domain"`
	EncryptionConfig     *EncryptionConfig `json:"EncryptionConfig"`
	LastModificationTime *time.Time        `json:"LastModificationTime"`
	Schema               *Schema           `json:"Schema"`
	Status               *string           `json:"Status"`
}
