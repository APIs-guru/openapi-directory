package shared

import (
	"time"
)

// Dataset
// A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.
type Dataset struct {
	CreationDate     *time.Time `json:"CreationDate,omitempty"`
	DataStorage      *int64     `json:"DataStorage,omitempty"`
	DatasetName      *string    `json:"DatasetName,omitempty"`
	IdentityID       *string    `json:"IdentityId,omitempty"`
	LastModifiedBy   *string    `json:"LastModifiedBy,omitempty"`
	LastModifiedDate *time.Time `json:"LastModifiedDate,omitempty"`
	NumRecords       *int64     `json:"NumRecords,omitempty"`
}
