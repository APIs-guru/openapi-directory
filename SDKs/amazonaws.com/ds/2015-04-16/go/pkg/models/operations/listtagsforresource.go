package operations

import (
"openapi/pkg/models/shared")


type ListTagsForResourceXAmzTargetEnum string

const (
    ListTagsForResourceXAmzTargetEnumDirectoryService20150416ListTagsForResource ListTagsForResourceXAmzTargetEnum = "DirectoryService_20150416.ListTagsForResource"
)


type ListTagsForResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListTagsForResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListTagsForResourceRequest struct {
    Headers ListTagsForResourceHeaders 
    Request shared.ListTagsForResourceRequest `request:"mediaType=application/json"`
    
}

type ListTagsForResourceResponse struct {
    ClientException *interface{} 
    ContentType string 
    EntityDoesNotExistException *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidParameterException *interface{} 
    ListTagsForResourceResult *shared.ListTagsForResourceResult 
    ServiceException *interface{} 
    StatusCode int64 
    
}

