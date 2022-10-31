package operations

import (
"openapi/pkg/models/shared")


type PutStoredQueryXAmzTargetEnum string

const (
    PutStoredQueryXAmzTargetEnumStarlingDoveServicePutStoredQuery PutStoredQueryXAmzTargetEnum = "StarlingDoveService.PutStoredQuery"
)


type PutStoredQueryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutStoredQueryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutStoredQueryRequest struct {
    Headers PutStoredQueryHeaders 
    Request shared.PutStoredQueryRequest `request:"mediaType=application/json"`
    
}

type PutStoredQueryResponse struct {
    ContentType string 
    PutStoredQueryResponse *shared.PutStoredQueryResponse 
    ResourceConcurrentModificationException *interface{} 
    StatusCode int64 
    TooManyTagsException *interface{} 
    ValidationException *interface{} 
    
}

