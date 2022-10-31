package operations

import (
"openapi/pkg/models/shared")


type ReportTaskProgressXAmzTargetEnum string

const (
    ReportTaskProgressXAmzTargetEnumDataPipelineReportTaskProgress ReportTaskProgressXAmzTargetEnum = "DataPipeline.ReportTaskProgress"
)


type ReportTaskProgressHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ReportTaskProgressXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ReportTaskProgressRequest struct {
    Headers ReportTaskProgressHeaders 
    Request shared.ReportTaskProgressInput `request:"mediaType=application/json"`
    
}

type ReportTaskProgressResponse struct {
    ContentType string 
    InternalServiceError *interface{} 
    InvalidRequestException *interface{} 
    PipelineDeletedException *interface{} 
    PipelineNotFoundException *interface{} 
    ReportTaskProgressOutput *shared.ReportTaskProgressOutput 
    StatusCode int64 
    TaskNotFoundException *interface{} 
    
}

