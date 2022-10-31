package operations

import (
"openapi/pkg/models/shared")


type AddRegionXAmzTargetEnum string

const (
    AddRegionXAmzTargetEnumDirectoryService20150416AddRegion AddRegionXAmzTargetEnum = "DirectoryService_20150416.AddRegion"
)


type AddRegionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AddRegionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AddRegionRequest struct {
    Headers AddRegionHeaders 
    Request shared.AddRegionRequest `request:"mediaType=application/json"`
    
}

type AddRegionResponse struct {
    AccessDeniedException *interface{} 
    AddRegionResult map[string]interface{} 
    ClientException *interface{} 
    ContentType string 
    DirectoryAlreadyInRegionException *interface{} 
    DirectoryDoesNotExistException *interface{} 
    DirectoryUnavailableException *interface{} 
    EntityDoesNotExistException *interface{} 
    InvalidParameterException *interface{} 
    RegionLimitExceededException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

