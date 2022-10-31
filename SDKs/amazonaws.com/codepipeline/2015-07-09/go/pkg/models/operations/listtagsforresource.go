package operations

import (
"openapi/pkg/models/shared")

type ListTagsForResourceQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListTagsForResourceXAmzTargetEnum string

const (
    ListTagsForResourceXAmzTargetEnumCodePipeline20150709ListTagsForResource ListTagsForResourceXAmzTargetEnum = "CodePipeline_20150709.ListTagsForResource"
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
    QueryParams ListTagsForResourceQueryParams 
    Headers ListTagsForResourceHeaders 
    Request shared.ListTagsForResourceInput `request:"mediaType=application/json"`
    
}

type ListTagsForResourceResponse struct {
    ContentType string 
    InvalidArnException *interface{} 
    InvalidNextTokenException *interface{} 
    ListTagsForResourceOutput *shared.ListTagsForResourceOutput 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

