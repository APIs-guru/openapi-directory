package shared

import (
	"time"
)

type ExportJobProperties struct {
	DataAccessRoleArn *string          `json:"DataAccessRoleArn,omitempty"`
	DatastoreID       string           `json:"DatastoreId"`
	EndTime           *time.Time       `json:"EndTime,omitempty"`
	JobID             string           `json:"JobId"`
	JobName           *string          `json:"JobName,omitempty"`
	JobStatus         JobStatusEnum    `json:"JobStatus"`
	Message           *string          `json:"Message,omitempty"`
	OutputDataConfig  OutputDataConfig `json:"OutputDataConfig"`
	SubmitTime        time.Time        `json:"SubmitTime"`
}
