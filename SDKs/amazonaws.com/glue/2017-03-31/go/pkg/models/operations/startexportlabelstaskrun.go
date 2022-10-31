package operations

import (
"openapi/pkg/models/shared")


type StartExportLabelsTaskRunXAmzTargetEnum string

const (
    StartExportLabelsTaskRunXAmzTargetEnumAwsGlueStartExportLabelsTaskRun StartExportLabelsTaskRunXAmzTargetEnum = "AWSGlue.StartExportLabelsTaskRun"
)


type StartExportLabelsTaskRunHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartExportLabelsTaskRunXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartExportLabelsTaskRunRequest struct {
    Headers StartExportLabelsTaskRunHeaders 
    Request shared.StartExportLabelsTaskRunRequest `request:"mediaType=application/json"`
    
}

type StartExportLabelsTaskRunResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StartExportLabelsTaskRunResponse *shared.StartExportLabelsTaskRunResponse 
    StatusCode int64 
    
}

