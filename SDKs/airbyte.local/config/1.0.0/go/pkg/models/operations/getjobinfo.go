package operations

import (
"openapi/pkg/models/shared")

type GetJobInfoRequest struct {
    Request shared.JobIDRequestBody `request:"mediaType=application/json"`
    
}

type GetJobInfoResponse struct {
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    JobInfoRead *shared.JobInfoRead 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    StatusCode int64 
    
}

