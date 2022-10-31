package shared

import (
"time")

type DescribeDatasetResponse struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    DataFrequency *string `json:"DataFrequency,omitempty"`
    DatasetArn *string `json:"DatasetArn,omitempty"`
    DatasetName *string `json:"DatasetName,omitempty"`
    DatasetType *DatasetTypeEnum `json:"DatasetType,omitempty"`
    Domain *DomainEnum `json:"Domain,omitempty"`
    EncryptionConfig *EncryptionConfig `json:"EncryptionConfig,omitempty"`
    LastModificationTime *time.Time `json:"LastModificationTime,omitempty"`
    Schema *Schema `json:"Schema,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}

