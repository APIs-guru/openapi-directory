package operations

import (
"openapi/pkg/models/shared")


type DeleteConditionalForwarderXAmzTargetEnum string

const (
    DeleteConditionalForwarderXAmzTargetEnumDirectoryService20150416DeleteConditionalForwarder DeleteConditionalForwarderXAmzTargetEnum = "DirectoryService_20150416.DeleteConditionalForwarder"
)


type DeleteConditionalForwarderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteConditionalForwarderXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteConditionalForwarderRequest struct {
    Headers DeleteConditionalForwarderHeaders 
    Request shared.DeleteConditionalForwarderRequest `request:"mediaType=application/json"`
    
}

type DeleteConditionalForwarderResponse struct {
    ClientException *interface{} 
    ContentType string 
    DeleteConditionalForwarderResult map[string]interface{} 
    DirectoryUnavailableException *interface{} 
    EntityDoesNotExistException *interface{} 
    InvalidParameterException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

