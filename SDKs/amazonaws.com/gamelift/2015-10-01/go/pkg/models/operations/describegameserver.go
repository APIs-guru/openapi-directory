package operations

import (
"openapi/pkg/models/shared")


type DescribeGameServerXAmzTargetEnum string

const (
    DescribeGameServerXAmzTargetEnumGameLiftDescribeGameServer DescribeGameServerXAmzTargetEnum = "GameLift.DescribeGameServer"
)


type DescribeGameServerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeGameServerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeGameServerRequest struct {
    Headers DescribeGameServerHeaders 
    Request shared.DescribeGameServerInput `request:"mediaType=application/json"`
    
}

type DescribeGameServerResponse struct {
    ContentType string 
    DescribeGameServerOutput *shared.DescribeGameServerOutput 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

