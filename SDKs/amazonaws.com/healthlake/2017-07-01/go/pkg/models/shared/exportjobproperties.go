package shared

import (
	"time"
)

// ExportJobProperties
// The properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
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
