package operations

import (
"openapi/pkg/models/shared")


type StartImportLabelsTaskRunXAmzTargetEnum string

const (
    StartImportLabelsTaskRunXAmzTargetEnumAwsGlueStartImportLabelsTaskRun StartImportLabelsTaskRunXAmzTargetEnum = "AWSGlue.StartImportLabelsTaskRun"
)


type StartImportLabelsTaskRunHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartImportLabelsTaskRunXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartImportLabelsTaskRunRequest struct {
    Headers StartImportLabelsTaskRunHeaders 
    Request shared.StartImportLabelsTaskRunRequest `request:"mediaType=application/json"`
    
}

type StartImportLabelsTaskRunResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    ResourceNumberLimitExceededException *interface{} 
    StartImportLabelsTaskRunResponse *shared.StartImportLabelsTaskRunResponse 
    StatusCode int64 
    
}

