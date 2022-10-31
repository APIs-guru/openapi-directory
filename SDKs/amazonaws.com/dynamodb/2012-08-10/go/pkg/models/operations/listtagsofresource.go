package operations

import (
"openapi/pkg/models/shared")


type ListTagsOfResourceXAmzTargetEnum string

const (
    ListTagsOfResourceXAmzTargetEnumDynamoDb20120810ListTagsOfResource ListTagsOfResourceXAmzTargetEnum = "DynamoDB_20120810.ListTagsOfResource"
)


type ListTagsOfResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListTagsOfResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListTagsOfResourceRequest struct {
    Headers ListTagsOfResourceHeaders 
    Request shared.ListTagsOfResourceInput `request:"mediaType=application/json"`
    
}

type ListTagsOfResourceResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    ListTagsOfResourceOutput *shared.ListTagsOfResourceOutput 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

