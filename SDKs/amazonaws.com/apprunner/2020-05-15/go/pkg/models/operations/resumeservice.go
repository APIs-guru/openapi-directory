package operations

import (
"openapi/pkg/models/shared")


type ResumeServiceXAmzTargetEnum string

const (
    ResumeServiceXAmzTargetEnumAppRunnerResumeService ResumeServiceXAmzTargetEnum = "AppRunner.ResumeService"
)


type ResumeServiceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ResumeServiceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ResumeServiceRequest struct {
    Headers ResumeServiceHeaders 
    Request shared.ResumeServiceRequest `request:"mediaType=application/json"`
    
}

type ResumeServiceResponse struct {
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidRequestException *interface{} 
    InvalidStateException *interface{} 
    ResourceNotFoundException *interface{} 
    ResumeServiceResponse *shared.ResumeServiceResponse 
    StatusCode int64 
    
}

