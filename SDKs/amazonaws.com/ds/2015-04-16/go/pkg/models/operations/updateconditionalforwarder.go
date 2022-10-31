package operations

import (
"openapi/pkg/models/shared")


type UpdateConditionalForwarderXAmzTargetEnum string

const (
    UpdateConditionalForwarderXAmzTargetEnumDirectoryService20150416UpdateConditionalForwarder UpdateConditionalForwarderXAmzTargetEnum = "DirectoryService_20150416.UpdateConditionalForwarder"
)


type UpdateConditionalForwarderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateConditionalForwarderXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateConditionalForwarderRequest struct {
    Headers UpdateConditionalForwarderHeaders 
    Request shared.UpdateConditionalForwarderRequest `request:"mediaType=application/json"`
    
}

type UpdateConditionalForwarderResponse struct {
    ClientException *interface{} 
    ContentType string 
    DirectoryUnavailableException *interface{} 
    EntityDoesNotExistException *interface{} 
    InvalidParameterException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    UpdateConditionalForwarderResult map[string]interface{} 
    
}

