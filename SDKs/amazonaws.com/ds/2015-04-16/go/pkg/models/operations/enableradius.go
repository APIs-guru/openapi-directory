package operations

import (
"openapi/pkg/models/shared")


type EnableRadiusXAmzTargetEnum string

const (
    EnableRadiusXAmzTargetEnumDirectoryService20150416EnableRadius EnableRadiusXAmzTargetEnum = "DirectoryService_20150416.EnableRadius"
)


type EnableRadiusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget EnableRadiusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type EnableRadiusRequest struct {
    Headers EnableRadiusHeaders 
    Request shared.EnableRadiusRequest `request:"mediaType=application/json"`
    
}

type EnableRadiusResponse struct {
    ClientException *interface{} 
    ContentType string 
    EnableRadiusResult map[string]interface{} 
    EntityAlreadyExistsException *interface{} 
    EntityDoesNotExistException *interface{} 
    InvalidParameterException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    
}

