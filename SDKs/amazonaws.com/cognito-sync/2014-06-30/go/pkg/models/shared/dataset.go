package shared

import (
	"time"
)

type Dataset struct {
	CreationDate     *time.Time `json:"CreationDate"`
	DataStorage      *int64     `json:"DataStorage"`
	DatasetName      *string    `json:"DatasetName"`
	IdentityID       *string    `json:"IdentityId"`
	LastModifiedBy   *string    `json:"LastModifiedBy"`
	LastModifiedDate *time.Time `json:"LastModifiedDate"`
	NumRecords       *int64     `json:"NumRecords"`
}
