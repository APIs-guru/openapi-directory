package operations

import (
"openapi/pkg/models/shared")


type PutWorkflowRunPropertiesXAmzTargetEnum string

const (
    PutWorkflowRunPropertiesXAmzTargetEnumAwsGluePutWorkflowRunProperties PutWorkflowRunPropertiesXAmzTargetEnum = "AWSGlue.PutWorkflowRunProperties"
)


type PutWorkflowRunPropertiesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutWorkflowRunPropertiesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutWorkflowRunPropertiesRequest struct {
    Headers PutWorkflowRunPropertiesHeaders 
    Request shared.PutWorkflowRunPropertiesRequest `request:"mediaType=application/json"`
    
}

type PutWorkflowRunPropertiesResponse struct {
    AlreadyExistsException *interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    EntityNotFoundException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    PutWorkflowRunPropertiesResponse map[string]interface{} 
    ResourceNumberLimitExceededException *interface{} 
    StatusCode int64 
    
}

