package shared

import (
"time")

type ListFhirExportJobsRequest struct {
    DatastoreID string `json:"DatastoreId"`
    JobName *string `json:"JobName,omitempty"`
    JobStatus *JobStatusEnum `json:"JobStatus,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SubmittedAfter *time.Time `json:"SubmittedAfter,omitempty"`
    SubmittedBefore *time.Time `json:"SubmittedBefore,omitempty"`
    
}

