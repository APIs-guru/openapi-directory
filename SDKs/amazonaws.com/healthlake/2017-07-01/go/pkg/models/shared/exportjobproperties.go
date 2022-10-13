package shared

import (
	"time"
)

type ExportJobProperties struct {
	DataAccessRoleArn *string          `json:"DataAccessRoleArn"`
	DatastoreID       string           `json:"DatastoreId"`
	EndTime           *time.Time       `json:"EndTime"`
	JobID             string           `json:"JobId"`
	JobName           *string          `json:"JobName"`
	JobStatus         JobStatusEnum    `json:"JobStatus"`
	Message           *string          `json:"Message"`
	OutputDataConfig  OutputDataConfig `json:"OutputDataConfig"`
	SubmitTime        time.Time        `json:"SubmitTime"`
}
