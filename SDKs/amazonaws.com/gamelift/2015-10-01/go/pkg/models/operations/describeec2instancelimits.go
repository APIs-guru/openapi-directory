package operations

import (
"openapi/pkg/models/shared")


type DescribeEc2InstanceLimitsXAmzTargetEnum string

const (
    DescribeEc2InstanceLimitsXAmzTargetEnumGameLiftDescribeEc2InstanceLimits DescribeEc2InstanceLimitsXAmzTargetEnum = "GameLift.DescribeEC2InstanceLimits"
)


type DescribeEc2InstanceLimitsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeEc2InstanceLimitsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeEc2InstanceLimitsRequest struct {
    Headers DescribeEc2InstanceLimitsHeaders 
    Request shared.DescribeEc2InstanceLimitsInput `request:"mediaType=application/json"`
    
}

type DescribeEc2InstanceLimitsResponse struct {
    ContentType string 
    DescribeEc2InstanceLimitsOutput *shared.DescribeEc2InstanceLimitsOutput 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

