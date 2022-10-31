package operations

import (
"openapi/pkg/models/shared")


type DescribeGameServerGroupXAmzTargetEnum string

const (
    DescribeGameServerGroupXAmzTargetEnumGameLiftDescribeGameServerGroup DescribeGameServerGroupXAmzTargetEnum = "GameLift.DescribeGameServerGroup"
)


type DescribeGameServerGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeGameServerGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeGameServerGroupRequest struct {
    Headers DescribeGameServerGroupHeaders 
    Request shared.DescribeGameServerGroupInput `request:"mediaType=application/json"`
    
}

type DescribeGameServerGroupResponse struct {
    ContentType string 
    DescribeGameServerGroupOutput *shared.DescribeGameServerGroupOutput 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

