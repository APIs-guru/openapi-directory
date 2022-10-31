package operations

import (
"openapi/pkg/models/shared")

type GetLogsRequest struct {
    Request shared.LogsRequestBody `request:"mediaType=application/json"`
    
}

type GetLogsResponse struct {
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    StatusCode int64 
    GetLogs200TextPlainBinaryString []byte 
    
}

