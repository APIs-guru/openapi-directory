package operations

import (
"openapi/pkg/models/shared")


type CreateComputerXAmzTargetEnum string

const (
    CreateComputerXAmzTargetEnumDirectoryService20150416CreateComputer CreateComputerXAmzTargetEnum = "DirectoryService_20150416.CreateComputer"
)


type CreateComputerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateComputerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateComputerRequest struct {
    Headers CreateComputerHeaders 
    Request shared.CreateComputerRequest `request:"mediaType=application/json"`
    
}

type CreateComputerResponse struct {
    AuthenticationFailedException *interface{} 
    ClientException *interface{} 
    ContentType string 
    CreateComputerResult *shared.CreateComputerResult 
    DirectoryUnavailableException *interface{} 
    EntityAlreadyExistsException *interface{} 
    EntityDoesNotExistException *interface{} 
    InvalidParameterException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

