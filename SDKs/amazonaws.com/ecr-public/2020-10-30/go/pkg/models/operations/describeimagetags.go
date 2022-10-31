package operations

import (
"openapi/pkg/models/shared")

type DescribeImageTagsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type DescribeImageTagsXAmzTargetEnum string

const (
    DescribeImageTagsXAmzTargetEnumSpencerFrontendServiceDescribeImageTags DescribeImageTagsXAmzTargetEnum = "SpencerFrontendService.DescribeImageTags"
)


type DescribeImageTagsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeImageTagsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeImageTagsRequest struct {
    QueryParams DescribeImageTagsQueryParams 
    Headers DescribeImageTagsHeaders 
    Request shared.DescribeImageTagsRequest `request:"mediaType=application/json"`
    
}

type DescribeImageTagsResponse struct {
    ContentType string 
    DescribeImageTagsResponse *shared.DescribeImageTagsResponse 
    InvalidParameterException *interface{} 
    RepositoryNotFoundException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

