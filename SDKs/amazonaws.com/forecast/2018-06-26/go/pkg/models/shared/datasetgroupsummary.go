package shared

import (
"time")

type DatasetGroupSummary struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    DatasetGroupArn *string `json:"DatasetGroupArn,omitempty"`
    DatasetGroupName *string `json:"DatasetGroupName,omitempty"`
    LastModificationTime *time.Time `json:"LastModificationTime,omitempty"`
    
}

