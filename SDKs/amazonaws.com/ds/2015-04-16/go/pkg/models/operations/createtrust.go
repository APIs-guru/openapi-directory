package operations

import (
"openapi/pkg/models/shared")


type CreateTrustXAmzTargetEnum string

const (
    CreateTrustXAmzTargetEnumDirectoryService20150416CreateTrust CreateTrustXAmzTargetEnum = "DirectoryService_20150416.CreateTrust"
)


type CreateTrustHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateTrustXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateTrustRequest struct {
    Headers CreateTrustHeaders 
    Request shared.CreateTrustRequest `request:"mediaType=application/json"`
    
}

type CreateTrustResponse struct {
    ClientException *interface{} 
    ContentType string 
    CreateTrustResult *shared.CreateTrustResult 
    EntityAlreadyExistsException *interface{} 
    EntityDoesNotExistException *interface{} 
    InvalidParameterException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

