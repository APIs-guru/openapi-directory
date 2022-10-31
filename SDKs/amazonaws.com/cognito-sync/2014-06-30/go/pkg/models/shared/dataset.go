package shared

import (
"time")

type Dataset struct {
    CreationDate *time.Time `json:"CreationDate,omitempty"`
    DataStorage *int64 `json:"DataStorage,omitempty"`
    DatasetName *string `json:"DatasetName,omitempty"`
    IdentityID *string `json:"IdentityId,omitempty"`
    LastModifiedBy *string `json:"LastModifiedBy,omitempty"`
    LastModifiedDate *time.Time `json:"LastModifiedDate,omitempty"`
    NumRecords *int64 `json:"NumRecords,omitempty"`
    
}

