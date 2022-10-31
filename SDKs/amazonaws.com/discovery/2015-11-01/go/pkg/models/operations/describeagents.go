package operations

import (
"openapi/pkg/models/shared")


type DescribeAgentsXAmzTargetEnum string

const (
    DescribeAgentsXAmzTargetEnumAwsPoseidonServiceV20151101DescribeAgents DescribeAgentsXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.DescribeAgents"
)


type DescribeAgentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeAgentsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeAgentsRequest struct {
    Headers DescribeAgentsHeaders 
    Request shared.DescribeAgentsRequest `request:"mediaType=application/json"`
    
}

type DescribeAgentsResponse struct {
    AuthorizationErrorException *interface{} 
    ContentType string 
    DescribeAgentsResponse *shared.DescribeAgentsResponse 
    HomeRegionNotSetException *interface{} 
    InvalidParameterException *interface{} 
    InvalidParameterValueException *interface{} 
    ServerInternalErrorException *interface{} 
    StatusCode int64 
    
}

