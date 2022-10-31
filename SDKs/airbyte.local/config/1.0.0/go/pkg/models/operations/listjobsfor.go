package operations

import (
"openapi/pkg/models/shared")

type ListJobsForRequest struct {
    Request shared.JobListRequestBody `request:"mediaType=application/json"`
    
}

type ListJobsForResponse struct {
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    JobReadList *shared.JobReadList 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    StatusCode int64 
    
}

