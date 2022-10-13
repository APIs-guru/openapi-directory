package shared

import (
	"time"
)

type ListFhirExportJobsRequest struct {
	DatastoreID     string         `json:"DatastoreId"`
	JobName         *string        `json:"JobName"`
	JobStatus       *JobStatusEnum `json:"JobStatus"`
	MaxResults      *int64         `json:"MaxResults"`
	NextToken       *string        `json:"NextToken"`
	SubmittedAfter  *time.Time     `json:"SubmittedAfter"`
	SubmittedBefore *time.Time     `json:"SubmittedBefore"`
}
