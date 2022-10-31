package operations

import (
"openapi/pkg/models/shared")


type DescribeTagsXAmzTargetEnum string

const (
    DescribeTagsXAmzTargetEnumAwsPoseidonServiceV20151101DescribeTags DescribeTagsXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.DescribeTags"
)


type DescribeTagsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeTagsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeTagsRequest struct {
    Headers DescribeTagsHeaders 
    Request shared.DescribeTagsRequest `request:"mediaType=application/json"`
    
}

type DescribeTagsResponse struct {
    AuthorizationErrorException *interface{} 
    ContentType string 
    DescribeTagsResponse *shared.DescribeTagsResponse 
    HomeRegionNotSetException *interface{} 
    InvalidParameterException *interface{} 
    InvalidParameterValueException *interface{} 
    ResourceNotFoundException *interface{} 
    ServerInternalErrorException *interface{} 
    StatusCode int64 
    
}

