package shared

import (
	"time"
)

type DescribeDatasetGroupResponse struct {
	CreationTime         *time.Time  `json:"CreationTime"`
	DatasetArns          []string    `json:"DatasetArns"`
	DatasetGroupArn      *string     `json:"DatasetGroupArn"`
	DatasetGroupName     *string     `json:"DatasetGroupName"`
	Domain               *DomainEnum `json:"Domain"`
	LastModificationTime *time.Time  `json:"LastModificationTime"`
	Status               *string     `json:"Status"`
}
