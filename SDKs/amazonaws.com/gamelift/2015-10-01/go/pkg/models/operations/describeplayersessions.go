package operations

import (
"openapi/pkg/models/shared")

type DescribePlayerSessionsQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=Limit"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribePlayerSessionsXAmzTargetEnum string

const (
    DescribePlayerSessionsXAmzTargetEnumGameLiftDescribePlayerSessions DescribePlayerSessionsXAmzTargetEnum = "GameLift.DescribePlayerSessions"
)


type DescribePlayerSessionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribePlayerSessionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribePlayerSessionsRequest struct {
    QueryParams DescribePlayerSessionsQueryParams 
    Headers DescribePlayerSessionsHeaders 
    Request shared.DescribePlayerSessionsInput `request:"mediaType=application/json"`
    
}

type DescribePlayerSessionsResponse struct {
    ContentType string 
    DescribePlayerSessionsOutput *shared.DescribePlayerSessionsOutput 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

