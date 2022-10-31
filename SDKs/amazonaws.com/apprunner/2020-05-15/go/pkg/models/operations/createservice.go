package operations

import (
"openapi/pkg/models/shared")


type CreateServiceXAmzTargetEnum string

const (
    CreateServiceXAmzTargetEnumAppRunnerCreateService CreateServiceXAmzTargetEnum = "AppRunner.CreateService"
)


type CreateServiceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateServiceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateServiceRequest struct {
    Headers CreateServiceHeaders 
    Request shared.CreateServiceRequest `request:"mediaType=application/json"`
    
}

type CreateServiceResponse struct {
    ContentType string 
    CreateServiceResponse *shared.CreateServiceResponse 
    InternalServiceErrorException *interface{} 
    InvalidRequestException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    
}

