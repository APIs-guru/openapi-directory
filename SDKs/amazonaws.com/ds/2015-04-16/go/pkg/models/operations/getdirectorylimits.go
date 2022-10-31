package operations

import (
"openapi/pkg/models/shared")


type GetDirectoryLimitsXAmzTargetEnum string

const (
    GetDirectoryLimitsXAmzTargetEnumDirectoryService20150416GetDirectoryLimits GetDirectoryLimitsXAmzTargetEnum = "DirectoryService_20150416.GetDirectoryLimits"
)


type GetDirectoryLimitsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetDirectoryLimitsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetDirectoryLimitsRequest struct {
    Headers GetDirectoryLimitsHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type GetDirectoryLimitsResponse struct {
    ClientException *interface{} 
    ContentType string 
    EntityDoesNotExistException *interface{} 
    GetDirectoryLimitsResult *shared.GetDirectoryLimitsResult 
    ServiceException *interface{} 
    StatusCode int64 
    
}

