package shared

import (
	"time"
)

type DescribeDatasetGroupResponse struct {
	CreationTime         *time.Time  `json:"CreationTime,omitempty"`
	DatasetArns          []string    `json:"DatasetArns,omitempty"`
	DatasetGroupArn      *string     `json:"DatasetGroupArn,omitempty"`
	DatasetGroupName     *string     `json:"DatasetGroupName,omitempty"`
	Domain               *DomainEnum `json:"Domain,omitempty"`
	LastModificationTime *time.Time  `json:"LastModificationTime,omitempty"`
	Status               *string     `json:"Status,omitempty"`
}
