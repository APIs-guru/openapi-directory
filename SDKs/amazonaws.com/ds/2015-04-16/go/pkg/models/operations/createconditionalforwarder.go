package operations

import (
"openapi/pkg/models/shared")


type CreateConditionalForwarderXAmzTargetEnum string

const (
    CreateConditionalForwarderXAmzTargetEnumDirectoryService20150416CreateConditionalForwarder CreateConditionalForwarderXAmzTargetEnum = "DirectoryService_20150416.CreateConditionalForwarder"
)


type CreateConditionalForwarderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateConditionalForwarderXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateConditionalForwarderRequest struct {
    Headers CreateConditionalForwarderHeaders 
    Request shared.CreateConditionalForwarderRequest `request:"mediaType=application/json"`
    
}

type CreateConditionalForwarderResponse struct {
    ClientException *interface{} 
    ContentType string 
    CreateConditionalForwarderResult map[string]interface{} 
    DirectoryUnavailableException *interface{} 
    EntityAlreadyExistsException *interface{} 
    EntityDoesNotExistException *interface{} 
    InvalidParameterException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

