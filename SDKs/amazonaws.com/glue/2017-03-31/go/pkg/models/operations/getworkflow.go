package operations

import (
"openapi/pkg/models/shared")


type GetWorkflowXAmzTargetEnum string

const (
    GetWorkflowXAmzTargetEnumAwsGlueGetWorkflow GetWorkflowXAmzTargetEnum = "AWSGlue.GetWorkflow"
)


type GetWorkflowHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetWorkflowXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetWorkflowRequest struct {
    Headers GetWorkflowHeaders 
    Request shared.GetWorkflowRequest `request:"mediaType=application/json"`
    
}

type GetWorkflowResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    GetWorkflowResponse *shared.GetWorkflowResponse 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

