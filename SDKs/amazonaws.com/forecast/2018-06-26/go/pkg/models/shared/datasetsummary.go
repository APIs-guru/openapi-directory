package shared

import (
"time")

type DatasetSummary struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    DatasetArn *string `json:"DatasetArn,omitempty"`
    DatasetName *string `json:"DatasetName,omitempty"`
    DatasetType *DatasetTypeEnum `json:"DatasetType,omitempty"`
    Domain *DomainEnum `json:"Domain,omitempty"`
    LastModificationTime *time.Time `json:"LastModificationTime,omitempty"`
    
}

