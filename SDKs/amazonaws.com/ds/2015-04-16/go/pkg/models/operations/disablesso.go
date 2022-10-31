package operations

import (
"openapi/pkg/models/shared")


type DisableSsoXAmzTargetEnum string

const (
    DisableSsoXAmzTargetEnumDirectoryService20150416DisableSso DisableSsoXAmzTargetEnum = "DirectoryService_20150416.DisableSso"
)


type DisableSsoHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisableSsoXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisableSsoRequest struct {
    Headers DisableSsoHeaders 
    Request shared.DisableSsoRequest `request:"mediaType=application/json"`
    
}

type DisableSsoResponse struct {
    AuthenticationFailedException *interface{} 
    ClientException *interface{} 
    ContentType string 
    DisableSsoResult map[string]interface{} 
    EntityDoesNotExistException *interface{} 
    InsufficientPermissionsException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    
}

