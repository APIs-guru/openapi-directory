package operations

import (
"openapi/pkg/models/shared")

type DescribeChannelPathParams struct {
    ChannelName string `pathParam:"style=simple,explode=false,name=channelName"`
    
}

type DescribeChannelQueryParams struct {
    IncludeStatistics *bool `queryParam:"style=form,explode=true,name=includeStatistics"`
    
}

type DescribeChannelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeChannelRequest struct {
    PathParams DescribeChannelPathParams 
    QueryParams DescribeChannelQueryParams 
    Headers DescribeChannelHeaders 
    
}

type DescribeChannelResponse struct {
    ContentType string 
    DescribeChannelResponse *shared.DescribeChannelResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

