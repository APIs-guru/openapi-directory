package operations

import (
"openapi/pkg/models/shared")

type DescribeGameSessionsQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=Limit"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeGameSessionsXAmzTargetEnum string

const (
    DescribeGameSessionsXAmzTargetEnumGameLiftDescribeGameSessions DescribeGameSessionsXAmzTargetEnum = "GameLift.DescribeGameSessions"
)


type DescribeGameSessionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeGameSessionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeGameSessionsRequest struct {
    QueryParams DescribeGameSessionsQueryParams 
    Headers DescribeGameSessionsHeaders 
    Request shared.DescribeGameSessionsInput `request:"mediaType=application/json"`
    
}

type DescribeGameSessionsResponse struct {
    ContentType string 
    DescribeGameSessionsOutput *shared.DescribeGameSessionsOutput 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TerminalRoutingStrategyException *interface{} 
    UnauthorizedException *interface{} 
    
}

